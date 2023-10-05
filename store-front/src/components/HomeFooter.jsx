import "../styles/HomeFooter.css";

const HomeFooter = () => {
  return (
    <>
      <div id="homeFooter">
        <div id="homeFooterLinkBox">
          <div id="homeFooterAddress">
            <h5 id="addressTitle">Gallery at Sip</h5>
            <p>1234 E Hoover St.</p> <p>Somerville Ma. 02145</p>
            <p>info@GalleySip.com</p> <p>(555)-555-5555</p>
          </div>
          <div>
            <h5 id="footerInformed">Stay Informed</h5>
            <p>Subscribe</p>
            <p>Social Links</p>
          </div>
          <div id="footerHoursBox">
            <h5>Hours</h5>
            <div id="footerHours">
              <div id="footerHoursDates">
                <p>Tuesday</p>
                <p>Wednesday</p>
                <p>Thursday</p>
                <p>Friday</p>
                <p>Saturday</p>
                <p>Sunday</p>
                <p>Closed on Mondays</p>
              </div>
              <div id="footerHoursTimes">
                <p>10am - 5pm</p>
                <p>10am - 5pm</p>
                <p>10am - 5pm</p>
                <p>10am - 8pm</p>
                <p>10am - 8pm</p>
                <p>10am - 5pm</p>
              </div>
            </div>
            <p id="specialHours">
              * Gallery closes on third Thursday of <br/> every month at 3pm for
              special ticketed event
            </p>
          </div>
        </div>
        <div id="homeFooterBlurb">
          Gallery at Sip is a nonprofit, tax-exempt organization accredited by
          the American Alliance of Museums. The Sip is generously funded by the
          City of Somerville, Cultural Affairs Program, Cultural Arts Council;
          the Suffolk County Department of Cultural Affairs and the Cultural
          Affairs Council, the Suffolk County Mayor and Board of County
          Commissioners; the State of Massachusettes, Department of State,
          Division of Arts and Culture, the Massachusettes Council on Arts and
          Culture, and the National Endowment for the Arts; and The Sip
          membership. CH697 - A copy of the official registration & financial
          information for Friends of the Sip Museum, Inc. may be obtained from
          the division of consumer services by calling toll-free (800-435-7352)
          within the state. Registration does not imply endorsement, approval,
          or recommendation by the state.
        </div>
        <div id="homeFooterPlug">
          This website created by bsherbrook github links etc.
        </div>
      </div>
    </>
  );
};

export default HomeFooter;
