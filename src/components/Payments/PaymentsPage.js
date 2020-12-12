import React, { useState, useEffect } from "react";
import { DataTable, Link, Loading, Modal } from "carbon-components-react";
import { ResponsiveContainer } from "../pageStyles";
import { Add16 } from "@carbon/icons-react";
import styled from "styled-components";
import { colors, spacing } from "../../theme";
import PageLayout from "../PageLayout";
import Breadcrumbs from "../Breadcrumbs";
import Button from "../Button";
import { Tag } from "carbon-components-react";

import { AppContext } from "../../api/AppContext";

const {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  TableHeader,
} = DataTable;

const SectionTitle = styled.h5`
  margin-top: ${spacing[7]};
  margin-bottom: ${spacing[2]};
`;

const AcctTable = styled.div`
  display: flex;
  background-color: ${colors.gray[10]};
  width: 100%;
  padding: ${spacing[5]};
  margin-top: ${spacing[3]};
`;

const AcctActions = styled.div`
  flex-grow: 1;
  text-align: right;
`;

const AcctNumber = styled.div`
  flex: 1 1 auto;
  margin-left: ${spacing[3]};
`;

const TableContainerStyled = styled(TableContainer)`
  min-width: 100%;
  margin-top: ${spacing[3]};
`;

const renderTable = ({ rows }) => {
  return (
    <TableContainerStyled>
      <Table>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell key={row.cells[0].id}>
                <div>
                  <strong>{row.cells[0].value}</strong>
                </div>
              </TableCell>
              <TableCell key={row.cells[1].id}>
                <Tag type="green">{row.cells[1].value} sent</Tag>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainerStyled>
  );
};

const headers = [
  {
    key: "tripler_name",
    header: "Tripler Name",
  },
  {
    key: "formatted_amount",
    header: "Amount",
  },
];

const PaymentTable = ({ data }) => (
  <DataTable render={renderTable} headers={headers} rows={data} />
);

const describeAccount = (user) => {
  if (!user.account) return null;
  return user.account?.account_type === 'paypal' ?
    'PayPal: ' + user.email :
    'Bank account: ********' + (user.account?.account_data?.last4 || '????')
};

const Payments = ({ completed, user }) => {
  const hasCompleted = completed && completed.length > 0;
  const { api, fetchUser } = React.useContext(AppContext);
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const accountDesc = describeAccount(user);

  const onRemove = (e) => {
    e.preventDefault();
    setModalOpen(true);
  };

  const onConfirmRemove = async () => {
    setLoading(true);
    const { data, error } = await api.removeAccount(user.account.id);
    setTimeout(async () => {
      await fetchUser();
      setLoading(false);
      setModalOpen(false);
    }, 1000);
  };

  return (
    <>
      <SectionTitle>Your payment account</SectionTitle>

      {user.account ? (
        <AcctTable>
          <div>{accountDesc}</div>
          <AcctActions>
            <Link href="#" onClick={onRemove}>Remove</Link>
          </AcctActions>
        </AcctTable>
      ) : (
        <Button
          trackingEvent={{ action: "AddPayment", label: "/payments" }}
          href="/payments/add"
        >
          Add an Account
          <Add16 />
        </Button>
      )}
      <SectionTitle>Earned payments</SectionTitle>
      {hasCompleted ?
        <p>Payments are estimated to arrive in 2 to 7 business days.</p> :
        <p>No payments have been made yet.</p>
      }
      <PaymentTable data={hasCompleted ? completed : []} />

      <Modal open={modalOpen} danger={true}
        modalHeading='Remove payment account'
        primaryButtonText='Remove account'
        secondaryButtonText='Cancel'
        onRequestClose={() => setModalOpen(false)}
        onRequestSubmit={onConfirmRemove}
      >
        {loading && <Loading />}
        Are you sure you want to remove your bank account?
        You cannot undo this action.  Future payments will not
        be sent until a new payment account is linked.
      </Modal>
    </>
  );
};

export const PaymentsPage = ({ payments, user }) => {
  const completed = payments.filter(
    (payment) => payment.status === "settled" || payment.status === "disbursed"
  );
  return (
    <PageLayout
      title="Payments"
      header={
        <Breadcrumbs
          items={[
            { name: "Home", route: "/" },
            { name: "Payments", route: "/" },
          ]}
        />
      }
    >
      <ResponsiveContainer>
        <Payments completed={completed} user={user} />
      </ResponsiveContainer>
    </PageLayout>
  );
};

export default () => {
  const [payments, setPayments] = useState(null);
  const { api, user } = React.useContext(AppContext);
  useEffect(() => {
    const fetchData = async () => {
      const data = await api.getPayments();
      setPayments(data.data);
    };
    fetchData();
  }, []);
  return payments ? (
    <PaymentsPage payments={payments} user={user} />
  ) : (
    <Loading />
  );
};
