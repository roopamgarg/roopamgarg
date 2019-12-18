import React from "react";
import "./layout.css";
import { Icon } from "antd";
import { Link,NavLink} from "react-router-dom";
const Layout = props => {
  
  return (
    <div className="layout">
      <div className="layout-header">
        <div className="header">
          <div>
            <div className="header-image"></div>
          </div>
          <h1 className="header-name">Roopam Garg</h1>
          <p className="header-title">Full Stack Web Developer</p>
          <div className="header-dash"></div>
        </div>
        <div className="layout-nav">
          <ul className="nav">
            <li className="nav-item"><NavLink to="/" exact activeClassName="active-link">About</NavLink></li>
            <li className="nav-item"><NavLink to="/experience" activeClassName="active-link">Experience</NavLink></li>
            <li className="nav-item"><NavLink to="/projects" activeClassName="active-link">Projects</NavLink></li>
            <li className="nav-item"><NavLink to="contact" activeClassName="active-link">Contact</NavLink></li>
          </ul>
        </div>
        <div className="layout-social-nav">
          <ul className="social-nav">
            <li className="nav-item">
              <a target="_blank" href="https://www.instagram.com/_roopamgarg/">
                <Icon type="instagram" />
              </a>
            </li>
            <li className="nav-item">
              <a target="_blank" href="https://github.com/roopamgarg">
                <Icon type="github" />
              </a>
            </li>
            <li className="nav-item">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/roopam-garg-8135a8158/"
              >
                <Icon type="linkedin" />
              </a>
            </li>
            <li className="nav-item">
              <a target="_blank" href="https://twitter.com/roopamg777">
                <Icon type="twitter" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="layout-content ">{props.children}</div>
    </div>
  );
};

export default Layout;
