import react from "react";
import pImg from "../public/assets/images/p-img.jpg";
import arrow from "../public/assets/images/arrow-service-icon.png";
const InstituteLevelManagement = () => {
  return (
    <>
      <div className="service-Main">
        <div className="service-in">
          <div className="service-in-heading" id="alt-long">
            <h3 className="Ser-head">Institute Level or Management Quota Admission</h3>
          </div>
          <div className="service-in-content">
            <div className="service-in-content-left">
              <li>
                <img src={arrow} />
                <p>Since last year, Institute Level Admissions are also based on Merit
                  or Rank. Hence, only with the help of Money we cannot purchase any seat
                </p>
              </li>
              <li>
                <img src={arrow} />
                <p>For those seats separate Admission Process is implemented. You will have to make separate registration
                  and fill up separate option form for getting admission in those seats.</p>
              </li>
              <li>
                <img src={arrow} />
                <p>
                  Fees for those seats are in higher side but you will get full info about it from time to time.
                </p>
              </li>
              <li>
                <img src={arrow} />
                <p>
                  We will guide you about how many seats are available at the beginning and at the end of every
                  round, so that timely decision could be taken to not to lose any opportunity.
                </p>
              </li>
              <li>
                <img src={arrow} />
                <p>
                  Related to this you will get every help till actual admission in Private and Deemed Colleges in Maharashtra.
                </p>
              </li>
              <li>
                <img src={arrow} />
                <p>Initial Rounds are conducted at State Level and most of the seats
                  are filled up in Rounds at College Level for which separate
                  Admission Process is implemented by College. You will get updates from us.
                </p>
              </li>
              <li>
                <img src={arrow} />
                <p>
                  Fees we charge for all above facilities (Mentioned in B) are Rs. 10000
                </p>
              </li>
            </div>
            <div className="service-in-content-right">
              <div className="servinice-in-content-right-in">
                <div className="servinice-in-content-right-in-in">
                  <img src="assets/images/p-img1.jpg"  ></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default InstituteLevelManagement;