import "./styles.scss";

export default function News({ className }) {
  return (
    <div className={`page-container ${className}`}>
      <div className="news-in">
        <h1>2023 News and Events: Earth Friendly Food Choices</h1>
        <br />
        <p>
          Great news! The Earthsave Baltimore nonprofit group will resume
          hosting live vegan potluck meetings at Govans Presbyterian Church,
          5828 York Road in Baltimore, near Towson. Church is next to the
          historic Senator Theater. The potlucks will be held on the fourth
          Saturday of each month, starting May 21st, from 6:00 until 8:15.
          Attendees are strongly encouraged to be up-to- date with Covid shots.
        </p>
        <br />
        <p>
          MONTHLY VEGAN POTLUCKS: The attendance fee is $5. Please RSVP by email
          at{" "}
          <a href="mailto: baltimore@earthsave.org">baltimore@earthsave.org</a>,
          or by voicemail at 410-252-3043. Guests are asked to bring a dish made
          without animal products that will serve 8 or more. If you’d like to
          bring food just for yourself or attend without eating, the fee is $5.
          We can usually accommodate a few guests who wish to attend without
          bringing a dish. The fee is $20, but pre-approval is required, and
          we’ll need to hear from you a day or more in advance.
        </p>
        <br />
        <p>
          There’s plenty of free parking. Drive around church to large parking
          lot, where you&#39;ll see the white Earthsave banner near the
          Fellowship Hall entry. You can get monthly event reminders by email by
          joining the{" "}
          <a
            href="https://www.meetup.com/The-Baltimore-Vegan-Meetup-Group/"
            target="_blank"
            rel="noreferrer"
          >
            Baltimore Vegan Meetup
          </a>{" "}
          or&nbsp;
          <a
            href="https://www.meetup.com/vegetarian-9/"
            target="_blank"
            rel="noreferrer"
          >
            Baltimore Vegetarian Meetup
          </a>{" "}
          . Another good resource for social connection, events info, questions
          and discussion is the&nbsp;
          <a
            href="https://www.facebook.com/groups/EarthsaveBaltimore/"
            target="_blank"
            rel="noreferrer"
          >
            Earthsave Baltimore Facebook group
          </a>
          .&nbsp;
          <a
            href="https://www.facebook.com/groups/509056979150170"
            target="_blank"
            rel="noreferrer"
          >
            Baltimore Vegans
          </a>{" "}
          is another helpful resource on Facebook.
        </p>
        <br />
        <p>
          MONTHLY RESTAURANT MEETUPS: Earthsave continues to host Veg/Vegan
          Meetup discussion groups on the second Saturday of each month.
          Attendees are strongly encouraged to be up-to- date with Covid shots.
          We will meet on alternating months at: The Taj Palace, 9419 Common
          Brook Rd, Owings Mills, MD 21117; and Mr. Chan, 1000 Reisterstown Rd,
          Pikesville, MD 21208. The buffet at Taj Palace is $19, and features a
          good number of vegan and veg options. And the waitstaff is friendly
          and helpful with answering questions. At Mr. Chan, we will order from
          the menu.
          <br />
          <br />
          <p>Hope to see you soon!</p>
        </p>
        <br />
        <p>Peace &amp; Love…</p>
      </div>
    </div>
  );
}
