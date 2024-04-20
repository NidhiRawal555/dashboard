import React from "react";
import frame from "../pictures/Frame-navbar.svg";
import search from "../pictures/search.svg";
import MaxDrawdown from "../pictures/MaxDrawdown.svg"
import iconAccount from "../pictures/iconAccount.svg"
const inbfoDiv = [
  { title: "Program Objectives", color: "Y" },
  { title: "Advanced Insights", color: "N" },
  { title: "Trading Journalv", color: "N" },
  { title: "Account Info", color: "N" },
];
 const cards =[
  {
  img:MaxDrawdown,
  title:"Daily Gain",
  percentage:"+7545",
  color:""
 },
 {
  img:MaxDrawdown,
  title:"Abs Gain",
  percentage:"-15.43%",
  color:"red"
 },
 {
  img:MaxDrawdown,
  title:"Daily Drawdown",
  percentage:"0.11%",
  color:""
 },
 {
  img:MaxDrawdown,
  title:"Max Drawdown",
  percentage:"7.22%",
  color:""
 },

]
const NavBar = () => {
  return (
    <>
      <div style={{ padding: "15px" }}>
        <div class="navbarMainDiv">
          <p>Account Metrics</p>
          <div
            style={{
              display: "flex",
              justifyContent:"space-between",
              width: "40%",
            }}
          >
            <div className="input">
            <span style={{margin:"10px"}}>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_55_14)">
                  <path
                    d="M16 15.0573L11.8253 10.8826C12.9098 9.55637 13.4429 7.86404 13.3146 6.15568C13.1862 4.44733 12.4061 2.85366 11.1357 1.70432C9.86531 0.554984 8.20174 -0.0620951 6.4891 -0.0192739C4.77647 0.0235473 3.14581 0.722992 1.93442 1.93439C0.723023 3.14578 0.0235778 4.77644 -0.0192434 6.48907C-0.0620646 8.2017 0.555014 9.86528 1.70435 11.1357C2.85369 12.4061 4.44736 13.1862 6.15571 13.3145C7.86407 13.4429 9.5564 12.9097 10.8827 11.8253L15.0573 16L16 15.0573ZM6.66667 12C5.61184 12 4.58069 11.6872 3.70363 11.1011C2.82657 10.5151 2.14298 9.68216 1.73932 8.70762C1.33565 7.73308 1.23003 6.66073 1.43582 5.62616C1.64161 4.5916 2.14956 3.64129 2.89544 2.89541C3.64132 2.14953 4.59163 1.64158 5.62619 1.43579C6.66076 1.23 7.73311 1.33562 8.70765 1.73929C9.68219 2.14295 10.5151 2.82654 11.1012 3.7036C11.6872 4.58066 12 5.61181 12 6.66664C11.9984 8.08064 11.436 9.43628 10.4362 10.4361C9.43631 11.436 8.08067 11.9984 6.66667 12Z"
                    fill="#707174"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_55_14">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>
            <input type="text" placeholder="Find something" />
            </div>
            <span>
              <img src={frame} />
            </span>
          </div>
        </div>
        <div class="info">
          {inbfoDiv.map((items) => (
            <div class={`${items.color == "Y" ? "inbfoDiv1" : "inbfoDiv"}`}>
              {items.title}
            </div>
          ))}
        </div>

        <div className="passed">
          <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
          <img src={iconAccount} />
            <p>Account Status</p>
          </div>
          <div>
            <button>Passed</button>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent:'space-between'}}>
          {cards.map((items)=>(
            <>
              <div class="navbarCard">
            <div>
               <img src={items.img} style={{marginBottom:"10px"}}/>
            </div>
            <div style={{display: "flex", justifyContent:'space-between', alignItems:"center" }}>
              <span class="navbarCardP1">{items.title}</span>
              <span class={` ${items.color !== "red" ? "navbarCardP2" : "navbarCardP2red"}`}>{items.percentage}</span>
            </div>
          </div>
            </>
          ))}
        
          {/* <div class="navbarCard">
            <div></div>
            <div>
              <span>Daily Gain</span>
              <span>+7545</span>
            </div>
          </div>
          <div class="navbarCard">
            <div></div>
            <div>
              <span>Daily Gain</span>
              <span>+7545</span>
            </div>
          </div>
          <div class="navbarCard">
            <div></div>
            <div>
              <span>Daily Gain</span>
              <span>+7545</span>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default NavBar;
