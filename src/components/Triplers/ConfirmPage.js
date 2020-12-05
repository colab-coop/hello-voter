import React, { useState, useEffect } from "react";
import { Form, FormGroup, TextInput, Dropdown, Checkbox } from "carbon-components-react";
import styled from "styled-components";
import { spacing } from "../../theme";
import PageLayout from "../PageLayout";
import { ResponsiveContainer } from "../pageStyles";
import Breadcrumbs from "../Breadcrumbs";
import Button from "../Button";
import { useParams } from "react-router-dom";
import { AppContext } from "../../api/AppContext";
import Loading from "../Loading";
import { useHistory } from "react-router-dom";
import { InlineNotification } from "carbon-components-react";

const MONTH_OPTIONS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const getMonthName = (month) => [
  '', // month number 0 is invalid
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
][month];

const FormGroupWithoutLegend = styled(FormGroup)`
  margin-bottom: 1.5rem;
  legend { display: none; }
`;

export default () => {
  const [tripler, setTripler] = useState(null);
  const [loading, setLoading] = useState(false);
  let { triplerId } = useParams();
  const { api } = React.useContext(AppContext);
  useEffect(() => {
    const fetchData = async () => {
      const data = await api.fetchTripler(triplerId);
      setTripler(data.data);
    };
    fetchData();
  }, []);

  const confirmTriplers = async (triplerId, formData) => {
    setLoading(true);
    const { error, data } = await api.confirmTriplers(triplerId, formData);
    setLoading(false);
    return {
      error,
      data,
    };
  };

  return tripler ? (
    <ConfirmPage
      tripler={tripler}
      confirmTriplers={confirmTriplers}
      loading={loading}
    />
  ) : (
    <Loading />
  );
};

const SubTitle = styled.div`
  margin-bottom: ${spacing[3]};
  font-weight: 600;
`;

const TwoColumnRow = styled.div`
  display: grid;
  align-items: end;
  grid-auto-columns: 1fr;
  grid-column-gap: ${spacing[5]};
  grid-row-gap: ${spacing[5]};
  grid-template-columns: repeat(2, 1fr);
  margin-bottom: ${spacing[3]};

  div {
    grid-column-end: unset;
  }
`;

const Column = styled.div`
  display: grid;
  align-items: start;
  margin-bottom: ${spacing[5]};
`;

export const ConfirmPage = ({ tripler, confirmTriplers, loading }) => {
  const history = useHistory();
  const [err, setErr] = useState(false);
  const submit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const { error } = await confirmTriplers(tripler.id, {
      phone: formData.get("phone"),
      tripler_birth_month: formData.get("tripler_birth_month"),
      triplees: [
        {
          first_name: formData.get("triplee1_first"),
          last_name: formData.get("triplee1_last"),
        },
        {
          first_name: formData.get("triplee2_first"),
          last_name: formData.get("triplee2_last"),
        },
        {
          first_name: formData.get("triplee3_first"),
          last_name: formData.get("triplee3_last"),
        },
      ],
      address: tripler.address,
    });
    if (error) return setErr(error.msg);
    history.push("/triplers");
  };
  return (
    <PageLayout
      title={`Vote Tripler: ${tripler.first_name}`}
      header={
        <Breadcrumbs
          items={[
            { name: "Home", route: "/home" },
            { name: "Vote Triplers", route: "/triplers" },
            { name: "Confirm" },
          ]}
        />
      }
    >
      <ResponsiveContainer>
        <Form onSubmit={submit}>
          <p style={{ marginBottom: 16 }}>
            Add the names of three Voters the Vote Tripler will remind to vote:
          </p>
          <FormGroupWithoutLegend>
            <SubTitle>Voter 1</SubTitle>
            <TwoColumnRow>
              <TextInput
                id="triplee1_first"
                name="triplee1_first"
                invalidText="Invalid error message."
                labelText="First Name*"
                required
              />
              <TextInput
                id="triplee1_last"
                name="triplee1_last"
                invalidText="Invalid error message."
                labelText="Last Name*"
                required
              />
            </TwoColumnRow>
          </FormGroupWithoutLegend>
          <FormGroupWithoutLegend>
            <SubTitle>Voter 2</SubTitle>
            <TwoColumnRow>
              <TextInput
                id="triplee2_first"
                name="triplee2_first"
                invalidText="Invalid error message."
                labelText="First Name*"
                required
              />
              <TextInput
                id="triplee2_last"
                name="triplee2_last"
                invalidText="Invalid error message."
                labelText="Last Name*"
                required
              />
            </TwoColumnRow>
          </FormGroupWithoutLegend>
          <FormGroupWithoutLegend>
            <SubTitle>Voter 3</SubTitle>
            <TwoColumnRow>
              <TextInput
                id="triplee3_first"
                name="triplee3_first"
                invalidText="Invalid error message."
                labelText="First Name*"
                required
              />
              <TextInput
                id="triplee3_last"
                name="triplee3_last"
                invalidText="Invalid error message."
                labelText="Last Name*"
                required
              />
            </TwoColumnRow>
          </FormGroupWithoutLegend>
          <FormGroupWithoutLegend>
          <p>
            Enter your Vote Tripler's birth month and cell phone number
            so we can confirm their identity and send you your payment!
          </p>
            <TwoColumnRow>
              <div>
                <Dropdown
                  id="tripler_birth_month"
                  name="tripler_birth_month"
                  items={MONTH_OPTIONS}
                  itemToString={getMonthName}
                  titleText={`${tripler.first_name}'s birth month*`}
                  invalidText="Invalid error message."
                  label={"Select a month"}
                  required
                />
              </div>
              <TextInput
                id="phone"
                name="phone"
                invalidText="Invalid error message."
                labelText={`${tripler.first_name}'s cell number*`}
                required
              />
            </TwoColumnRow>
          </FormGroupWithoutLegend>

          <FormGroupWithoutLegend>
            <Checkbox
              id="Honor"
              name="Honor"
              labelText="I certify this information is true to the best of my knowledge. I understand that I may be removed from BlockPower if I submit false information and will be denied all compensation."
              required
            />
          </FormGroupWithoutLegend>
          {err && (
            <InlineNotification
              kind="error"
              icondescription="Dismiss notification"
              subtitle={err}
              title=""
            />
          )}

          <Button
            type="submit"
            loading={loading}
            trackingEvent={{ action: "SubmitTriplerConfirm", label: "Send Text" }}
            isAForm
          >
            Send Text
          </Button>
          <Button
            size="small"
            kind="tertiary"
            href={"/triplers"}
            trackingEvent={{
              action: "BackFromTriplerConfirm",
              label: "Go back to My Vote Triplers",
            }}
          >
            Go back to My Vote Triplers
          </Button>
        </Form>
      </ResponsiveContainer>
    </PageLayout>
  );
};
