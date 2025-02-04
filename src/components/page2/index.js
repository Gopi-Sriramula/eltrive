import React, { useState } from "react";
import "./style.css";
const images = [
  "https://www.mushroomnetworks.com/wp-content/uploads/2019/10/automation-in-IT.jpg",
  "https://www.estuate.com/wp-content/uploads/2020/04/why-automation.jpg",
  "https://iticollege.edu/wp-content/uploads/2023/07/Automation.jpg",
  "https://cdn.sanity.io/images/vpe6kkg1/production/5a4e3e760c2d764c09170cd43c7bb26ac43a5445-5120x2880.jpg?q=75&fit=clip&auto=format",
  "https://www.shutterstock.com/image-photo/gears-mechanism-on-virtual-screen-600nw-2476850721.jpg",
  "https://images.squarespace-cdn.com/content/v1/55181a36e4b05c72e7f6a2a3/1587404952565-SM6OXHGS3RRY7DYSRZKN/Global-Industrial-Automation-Market-in-Life-Sciences-Industry-1024x684.jpg?format=1500w",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPk5_syYdpJr2TpBv9JqVeIuQx_4sVY3zUxQ&s",
  "https://cdn.builtin.com/cdn-cgi/image/f=auto,fit=cover,w=1200,h=635,q=80/https://builtin.com/sites/www.builtin.com/files/2023-06/industrial%20automation%20companies.jpg",
  "https://www.progressiveautomations.com/cdn/shop/articles/smart-home.jpg?v=1650900438&width=1100",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6z9WHE9I_6nPBJLpSBtMZI1xf-qNKB37VYA&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-DCA-YT7h3q2oC8f2st5outpi0P7twLzq2g&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbq26G7coPcPJUs0FkuJbQuC1E7HzRWTFTzA&s",
  "https://www.asiius.com/Theme/images/videos/robot.jpg",
  "https://automationedge.com/wp-content/uploads/2024/02/125-1.webp",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG_DrX3maW_JJyFRLl7kMxtH-lrXCTHwUnvQ&s",
  "https://dc-mkt-prod.cloud.bosch.tech/us/media/campaigns/factory_automation/01_factory_automation_homepage/fa-hero_1920x1080.jpg",
];
function ProductsServices() {
  const [state, setState] = useState(false);
  return (
    <div>
      <div className="products_services">
        <h3>Products & Services</h3>
        <ul>
          <li>Robotics and automated assembly lines</li>
          <li>AI-driven predictive maintenance</li>
          <li>IoT-based monitoring systems</li>
          <li>Industrial sensors and control systems</li>
          <li>
            Automated warehouse solutions (conveyor belts, pick & place robots)
          </li>
        </ul>
      </div>
      <div className="products_services">
        <h3>Project analytics</h3>
        <ul>
          <li>Project Name & Description</li>
          <li>Objective (What problem does the automation solve?)</li>
          <li>Technology Stack (Tools, frameworks, and platforms used)</li>
          <li>Industrial sensors and control systems</li>
          <li>Execution Time Reduction (%)</li>
          <li>Error Reduction Rate (%)</li>
          <li>Cost Savings (before vs. after automation)</li>
          <li>Productivity Improvement (%)</li>
        </ul>
      </div>
      <div className="gallery">
        <h3>Gallery</h3>
        <button className="btn"
          onClick={() => {
            setState(true);
          }}
        >
          Click here for images
        </button>
        <div className="setOfimages" style={{display:state?"flex":"none"}}>
          <span className="close" onClick={()=>setState(false)}>&times;</span>
          {images.map((item) => {
            return <img src={item} alt="Image failed to load" />;
          })}
        </div>
      </div>
      <div className="products_services">
        <h3>Customers</h3>
        <ul>
          <li>Who benefits from your automation? (Businesses, industries, individuals)</li>
          <li>Target audience (Startups, enterprises, manufacturers, etc.)</li>
          <li>How automation improves their workflow/processes</li>
          <li>Before vs. After Automation impact</li>
          <li>Industry-specific solutions (e.g., e-commerce, healthcare, finance)</li>
          <li>Customer feedback on automation benefits</li>
          <li>Case studies with real-world results</li>
          <li>Ratings & reviews</li>
        </ul>
      </div>
    </div>
  );
}

export default ProductsServices;
