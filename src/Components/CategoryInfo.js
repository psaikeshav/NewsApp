import React from 'react'
import { findFlagUrlByIso2Code } from "country-flags-svg";
import {FiGlobe, FiGrid} from "react-icons/fi";

const countryNames = {
  in: "India",
  us: "United States",
  au: "Australia",
  pk: "Pakistan",
  gbr: "United Kingdom",
  ca: "Canada"
};

const CategoryInfo = ({country,category}) => {

    const flagUrl = findFlagUrlByIso2Code(country);
    const countryName = countryNames[country] || country.toUpperCase();
    
  return (
      <>
    {/* Feature Hint Banner */}
    <div className="feature-banner">
      <div className="feature-item">
        <FiGrid size={18} />
        <span><strong>Browse by Category:</strong> Use the navigation menu above to explore different news topics</span>
      </div>
      <div className="feature-item">
        <FiGlobe size={18} />
        <span><strong>Switch Country:</strong> Use the country dropdown in the navbar to see news from different regions</span>
      </div>
    </div>
    
    <h2 className="categoryinfo" style={{display:"flex",justifyContent:"center",alignItems:"center",flexWrap:"wrap",gap:"8px"}}>
      <span className="category-badge">{category.toUpperCase()}</span> 
      <span>NEWS FROM</span>
      <span style={{color:"#922a44",display:"flex",alignItems:"center",gap:"8px"}}>
        <img src={flagUrl} alt={`${countryName} flag`} style={{width:"45px"}} className="flag"/>
        <span>{countryName}</span>
      </span>
    </h2>
    <p className="category-hint">📰 Showing top headlines • Updated in real-time</p>
    </>
  )
}

export default CategoryInfo