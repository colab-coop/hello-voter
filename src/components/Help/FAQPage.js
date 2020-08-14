import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { Accordion, AccordionItem, Link } from 'carbon-components-react'
import { colors, breakpoints, spacing } from '../../theme'
import PageLayout from '../PageLayout'

const { REACT_APP_ORG } = process.env;
const isBlockPower = REACT_APP_ORG === "BlockPower"
const isColorOfChange = REACT_APP_ORG === "ColorOfChange";
const isOrgHandlePayments = isBlockPower || isColorOfChange

// FIXME: Hack to clean up accordion styles
const AccordionStyleHack = createGlobalStyle`
  #accordion {
    max-width: ${ breakpoints.md.width };
    margin-bottom: ${ spacing[8] };
  }
  #accordion .bx--accordion__title {
    font-weight: 600;
  }
  #accordion .bx--accordion__heading {
    background-color: ${ colors.gray[10] };
    padding-top: ${ spacing[5] };
    padding-bottom: ${ spacing[5] };
  }
  #accordion .bx--accordion__content {
    padding-top: ${ spacing[5] };
    padding-bottom: ${ spacing[7] };
  }
`

export default () => {
  return (
    <PageLayout>
      <h3 style={{ marginBottom: 16 }}>General</h3>
      <AccordionStyleHack />
      <Accordion id="accordion">
        <AccordionItem title="What is a Voting Ambassador?">
          <p>
            A Voting Ambassador is a community organizer who recruits Vote
            Triplers — people who commit to reminding three people to vote in
            the next election.
          </p>
        </AccordionItem>
        <AccordionItem title="What is a Vote Tripler?">
          <p>
            A Vote Tripler is a person who commits to remind three people
            (friends, housemates, neighbors, etc.) to vote in the next election.
          </p>
        </AccordionItem>
        <AccordionItem title="How much can I earn as a Voting Ambassador?">
          <p>
            You’ll earn a payment for each Vote Tripler you recruit. In
            addition, if a Vote Tripler also goes on to become a Voting
            Ambassador and recruits other Vote Triplers, you’ll earn a bonus.
            You can earn a total of up to $500.
          </p>
        </AccordionItem>
        <AccordionItem title="How much can I earn as a Vote Tripler?">
          <p>
            Vote Triplers are volunteers. If you are a Vote Tripler who also
            became a Voting Ambassador, you are being paid only as a Voting
            Ambassador — not as a Vote Tripler.
          </p>
        </AccordionItem>
        <AccordionItem title="My housemate (or family member, neighbor, or friend) wants to be a Vote Tripler but isn't on the list. Can I add them anyway?">
          <p>
            No, you can only add Vote Triplers from the list. But we encourage
            you to talk about vote tripling with other people you know so more
            people will be reminded to vote in the next election!
          </p>
        </AccordionItem>
        <AccordionItem title="My housemate (or family member, neighbor, or friend) wants to be a Voting Ambassador but isn't on the list. Can I add them anyway?">
          <p>
            No. Only people who are in our voter database (and whose names are
            on the list in this app) may be Voting Ambassadors.
          </p>
        </AccordionItem>
        <AccordionItem title="What should I say to someone to get them to be a Vote Tripler?">
          <p>
            <strong>You:</strong> There's an important election coming up in
            November, and I'm asking people I know to remind their friends to
            vote. Can I count on you to remind three of your friends to vote on
            Election Day?
          </p>
          <br />
          <p>
            <strong>Vote Tripler:</strong> Sure.
          </p>
          <br />
          <p>
            <strong>You:</strong> Great! What are the names of the three people
            you'll remind to vote?
          </p>
          <br />
          <p>
            <strong>Vote Tripler:</strong> Angela Baker, Charlie Dawson, and
            Edna Foxx.
          </p>
          <br />
          <p>
            <strong>You:</strong> Thanks! A reminder to vote can make a big
            difference — especially when it's from a friend. I really appreciate
            your help.
          </p>
        </AccordionItem>
        <AccordionItem title="Can a person I recruited as a Vote Tripler become a Voting Ambassador?">
          <p>
            Yes! When we confirm a new Vote Tripler, we send a link to a special
            registration page where that person can apply to become a Voting
            Ambassador. (That person must still remind three people to vote, as
            he or she committed to do as a Vote Tripler.) If that person becomes
            a Voting Ambassador and recruits at least one Vote Tripler of his or
            her own, you’ll earn a bonus.
          </p>
        </AccordionItem>
      </Accordion>

      <h3 style={{ marginBottom: 16 }}>Accounts and transactions</h3>
      <Accordion id="accordion">
        <AccordionItem title="I added a Vote Tripler, so why didn't I get paid?">
          <p>
            When you add Vote Tripler, you must also add (a) the names of three
            people the Vote Tripler will remind to vote, and (b) the Vote
            Tripler's phone number. We will send a text message to the Vote
            Tripler to confirm that he or she is in our voter database. As soon
            as the Vote Tripler is confirmed, you are qualified to receive your
            payment.
          </p>
        </AccordionItem>
        <AccordionItem title="How and when will I get paid?">
          <p>
            We offer two types of payments: (a) direct deposit into an existing
            bank account (if you have one); or (b) direct deposit into a new
            bank account (through Chime, an online bank) if you would like to
            open a bank account.
          </p>
        </AccordionItem>
        {!isOrgHandlePayments && (
          <AccordionItem title="When will I get paid?">
            <p>
              We will pay you as quickly as possible after confirming your Vote
              Tripler(s).
            </p>
          </AccordionItem>
        )}
        <AccordionItem title="Do I have to pay taxes on my earnings as a Voting Ambassador?">
          <p>
            Money you earn as a Voting Ambassador is considered “income” for tax
            purposes. Depending on your individual financial situation, you
            could be subject to tax on this income.
          </p>
        </AccordionItem>
        <AccordionItem title="Is my personal and financial information secure?">
          <p>
            Yes. We do not sell or trade your personal or financial information.
            For more details, please see our{" "}
            <Link href="#/privacy">Privacy Statement</Link> and{" "}
            <Link href="#/terms">Terms of Service</Link>.
          </p>
        </AccordionItem>
      </Accordion>
    </PageLayout>
  );
};