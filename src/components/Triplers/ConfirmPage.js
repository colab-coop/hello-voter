import React, { useState, useEffect } from "react";
import { Form, FormGroup, TextInput, Checkbox } from "carbon-components-react";
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

const SubTitle = styled.p`
  margin-bottom: ${spacing[3]};
  font-weight: 600;
`;

const TwoColumnRow = styled.div`
  display: grid;
  align-items: start;
  grid-auto-columns: 1fr;
  grid-column-gap: ${spacing[5]};
  grid-row-gap: ${spacing[5]};
  grid-template-columns: repeat(2, 1fr);
  margin-bottom: ${spacing[3]};
`;

export const ConfirmPage = ({ tripler, confirmTriplers, loading }) => {
  const history = useHistory();
  const [err, setErr] = useState(false);
  const submit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const handleHousemate = (triplee) => {
      let result;
      if (triplee === "on") {
        result = true;
      } else {
        result = false;
      }
      return result;
    };
    const { error } = await confirmTriplers(tripler.id, {
      phone: formData.get("phone"),
      triplees: [
        {
          first_name: formData.get("triplee1_first"),
          last_name: formData.get("triplee1_last"),
          housemate: handleHousemate(formData.get("triplee1_housemate")),
        },
        {
          first_name: formData.get("triplee2_first"),
          last_name: formData.get("triplee2_last"),
          housemate: handleHousemate(formData.get("triplee2_housemate")),
        },
        {
          first_name: formData.get("triplee3_first"),
          last_name: formData.get("triplee3_last"),
          housemate: handleHousemate(formData.get("triplee3_housemate")),
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
            {
              name: "Home",
              route: "/home",
            },
            {
              name: "Vote Triplers",
              route: "/triplers",
            },
            {
              name: "Confirm",
            },
          ]}
        />
      }
    >
      <ResponsiveContainer>
        <Form onSubmit={submit}>
          <p style={{ marginBottom: 16 }}>
            Add the names of three Voters the Vote Tripler will remind to vote:
          </p>
          <FormGroup legendText="">
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
            <Checkbox
              id="triplee1_housemate"
              name="triplee1_housemate"
              labelText="Housemate"
            />
          </FormGroup>
          <FormGroup legendText="">
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
            <Checkbox
              id="triplee2_housemate"
              name="triplee2_housemate"
              labelText="Housemate"
            />
          </FormGroup>
          <FormGroup legendText="">
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
            <Checkbox
              id="triplee3_housemate"
              name="triplee3_housemate"
              labelText="Housemate"
            />
          </FormGroup>
          <p>
            Add the Vote Tripler's phone number so we can confirm their identity
            and send you your payment!
          </p>
          <FormGroup legendText="">
            <TextInput
              id="phone"
              name="phone"
              invalidText="Invalid error message."
              labelText={`${tripler.first_name}'s Mobile Phone Number*`}
              required
            />
          </FormGroup>
          {err && (
            <InlineNotification
              kind="error"
              icondescription="Dismiss notification"
              subtitle={err}
              title={null}
            />
          )}
          <Button
            type="submit"
            loading={loading}
            trackingEvent={{ action: "SubmitTriplerConfirm", label: "Add" }}
            isAForm
          >
            Add
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
