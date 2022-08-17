import React from 'react'
import './sidebar.css'
import HomeIcon from "../../Icons/icons8-home-32.png"
import SalesIcon from "../../Icons/icons8-total-sales-24.png"
import AnalyticsIcon from "../../Icons/icons8-download-graph-report-80.png"
import UserIcons from "../../Icons/icons8-add-user-group-man-man-48.png"
import ProductIcons from "../../Icons/icons8-grocery-shelf-30.png"
import TransactionIcon from "../../Icons/icons8-transaction-50.png"
import EmailIcon from "../../Icons/icons8-mail-30.png"
import SettingIcon from "../../Icons/icons8-gear-50.png"
import TodoIcon from "../../Icons/icons8-todo-list-30.png"
import Feedbackicon from "../../Icons/icons8-feedback-30.png"
import NewProductIcon from "../../Icons/icons8-new-product-53.png"
import ManageIcon from "../../Icons/icons8-request-service-50.png"
import OrderIcons from "../../Icons/icons8-purchase-order-24.png"
export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div>
        <p style={{textAlign:"start" , color:"#A5A1A1" , marginLeft:15}}>Dashbord</p>
        <ul>
          <li>
            <img className='logoImage' src={`${HomeIcon}`} alt="" />
            <a href="/">Home</a>
            </li>
          <li>
          <img className='logoImage' src={`${SalesIcon}`} alt="" />
            <a href="/">Sales</a>
            </li>
          <li>
          <img  className='logoImage' src={`${AnalyticsIcon}`} alt="" />
            <a href="/">Analytics</a>
            </li>
        </ul>
      </div>

      <div>
        <p style={{textAlign:"start", color:"#A5A1A1" , marginLeft:15}}>Quick Menu</p>
        <ul>
          <li>
          <img src={`${UserIcons}`} className='logoImage' alt="" />
            <a href="/">User</a>
            </li>
          <li>
          <img src={`${ProductIcons}`} className='logoImage' alt="" />
            <a href="/">Products</a>
            </li>
          <li>
            <img src={`${TransactionIcon}`} className='logoImage' alt="" />
            <a href="/">Transaction</a>
            </li>
            <li>
            <img src={`${EmailIcon}`} className='logoImage' alt="" />
            <a href="/">Email</a>
            </li>
          <li>
          <img src={`${SettingIcon}`} className='logoImage' alt="" />
            <a href="/">Setting</a>
            </li>
          <li>
          <img src={`${TodoIcon}`} className='logoImage' alt="" />
            <a href="/">Todo</a>
            </li>
            <li>
            <img src={`${Feedbackicon}`}  className='logoImage' alt="" />
            <a href="/">Feedback</a>
            </li>
          <li>
          <img src={`${NewProductIcon}`} className='logoImage' alt="" />
            <a href="/">New Product</a>
            </li>
          <li>
          <img src={`${ProductIcons}`} className='logoImage' alt="" />
            <a href="/">ProductLists</a>
            </li>
            
        </ul>
      </div>
      <div>
        <p style={{textAlign:"start", color:"#A5A1A1" , marginLeft:15}}>Notifications</p>
        <ul>
          <li>
          <img src={`${ManageIcon}`} className='logoImage' alt="" />
            <a href="/">Manage</a>
            </li>
          <li>
          <img src={`${AnalyticsIcon}`}  className='logoImage' alt="" />
            <a href="/">Report</a>
            </li>
          <li>
          <img src={`${OrderIcons}`} className='logoImage' alt="" />
            <a href="/">Orders</a>
            </li>
        </ul>
      </div>
    </div>
  )
}
