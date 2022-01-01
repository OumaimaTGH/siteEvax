import React from "react";
import image1 from "../../Assets/images/cin.jpg";
import image2 from "../../Assets/images/-18.jpg";
import image3 from "../../Assets/images/citoyensétranger.jpg";
import image4 from "../../Assets/images/img4.jpg";

import image5 from "../../Assets/images/annulerinsc.jpg";
import image6 from "../../Assets/images/Reporterrendez-vous.jpg";

//import {majInscription} from '../../views/majInscription';
import { Row, Col } from "antd";
import { Anchor, Button } from "antd";
import { Card } from "antd";
const { Link } = Anchor;
const { Meta } = Card;

function AppInscriptionPage() {
  return (
    <div className="block inscriptionBlock">
      <div
        style={{ marginBottom: "50px", marginRight: "100px" }}
        className="ins1"
      >
        <Row>
          <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
            <a href="/Visiteur/InsCitoyenTitulaire">
              <Card
                hoverable
                style={{ width: 400 }}
                cover={<img alt="example" src={image1} />}
              >
                <Meta title="Citoyen titulaire d'une carte d'identité nationale" />
              </Card>
            </a>
          </Col>

          {/*     <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
    <a href = "/Visiteur/InsCitoyenNonTitulaire">

    <Card
    hoverable
    style={{ width: 400 }}
    cover={<img style={{height: "265px"}} alt="example" src={image2} />}
  >
    <Meta title="Citoyen sans carte d'identité nationale"/>
  </Card>
  </a>
    </Col>
    
    <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
    <Card
    hoverable
    style={{ width: 400 }}
    cover={<img alt="example" src={image3} />}
  >
    <Meta title="Citoyen étranger"/>
  </Card>
    </Col> */}
          <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
            <a href="/Visiteur/maj_inscription">
              <Card
                hoverable
                style={{ width: 400 }}
                cover={<img alt="example" src={image4} />}
              >
                <Meta title="Mettre à jour mon inscription" />
              </Card>
            </a>
          </Col>
          <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
            <a href="/Visiteur/certif">
              <Card
                hoverable
                style={{ width: 400 }}
                cover={
                  <img style={{ height: "265px" }} alt="example" src={image5} />
                }
              >
                <Meta title="Télécharger passe sanitaire" />
              </Card>
            </a>
          </Col>
        </Row>
      </div>

      {/* <div style={{ marginBottom:"50px", marginRight:"100px"}} className="ins1">
<Row>
  

    <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
    <Card
    hoverable
    style={{ width: 400 }}
    cover={<img alt="example" src={image6} />}
  >
    <Meta title="Reporter le rendez-vous"/>
  </Card>
    </Col>

    
  </Row>
</div> */}
    </div>
  );
}
export default AppInscriptionPage;
