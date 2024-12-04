import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, url,links }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="i"/>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        {Array.isArray(links) &&
          links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: "white",
                padding: "8px 16px",
                border: "1px solid #555",
                borderRadius: "4px",
                backgroundColor: link.active ? "black" : "transparent",
                cursor: link.active ? "pointer" : "not-allowed",
                pointerEvents: link.active ? "auto" : "none",
              }}
            >
              {link.label}
            </a>
          ))}
      </div>
        </div>

      </div>
      
    </Col>
  )
}
