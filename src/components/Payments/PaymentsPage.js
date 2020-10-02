import React, { useState, useEffect } from "react";
import { DataTable, Link } from "carbon-components-react";
import { ResponsiveContainer } from "../pageStyles";
import { Add16 } from "@carbon/icons-react";
import styled from "styled-components";
import { colors, spacing } from "../../theme";
import PageLayout from "../PageLayout";
import Breadcrumbs from "../Breadcrumbs";
import Button from "../Button";
import Loading from "../Loading";
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

const Payments = ({ completed, user }) => {
  const hasCompleted = completed && completed.length > 0;

  return (
    <>
      <SectionTitle>Your payment account</SectionTitle>
      {user.payout_provider ? (
        <AcctTable>
          Account #: ********{user.account.account_data.last4}
          <AcctNumber></AcctNumber>
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

      <SectionTitle>Earned Payments</SectionTitle>
      <p>Estimated arrival in 2-4 business days</p>
      <PaymentTable data={hasCompleted ? completed : []} />
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
            {
              name: "Home",
              route: "/",
            },
            {
              name: "Payments",
              route: "/",
            },
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
