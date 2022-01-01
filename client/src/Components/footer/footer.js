import React from 'react';
import './footer.css';
import { BackTop } from 'antd';
import logo from '../../Assets/images/logo2.png';

function AppFooter() {
  return (
    <div className="container-fluid">
      <div className="footer">
        <div className="logo">
        <img src={logo} alt="Logo" />

        </div>
        <ul className="socials">
          <li><a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a></li>
          <li><a href="https://www.twitter.com/"><i className="fab fa-twitter"></i></a></li>
          <li><a href="https://www.linkedin.com/"><i className="fab fa-linkedin-in"></i></a></li>
          <li><a href="https://www.pinterest.com/"><i className="fab fa-pinterest-p"></i></a></li>
          <li><a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a></li>
        </ul>
        <p className="evax">
        Lorsque vous cliquez sur le bouton "Ajouter une demande d'inscription" de votre formulaire de demande d'inscription sur evax.tn, vous indiquez que vous connaissez les conditions générales Politique de confidentialité .Vous acceptez volontairement les termes et conditions fournis.
eVAX est le résultat d'un travail et d'un engagement patriotique commun des équipes du CNI, ISIE, CIMS, ANSI, les opérateurs (TT, Ooredoo et Orange), Ministère de la Santé et le Ministère des Technologies de la Communication. Lorsque vous cliquez sur le bouton "Ajouter une demande d'inscription" de votre formulaire de demande d'inscription sur evax.tn, vous indiquez que vous connaissez les conditions générales. Politique de confidentialité . Vous acceptez volontairement les termes et conditions fournis. République de Tunisie - Ministère de la Santé - Portail d’inscription à la campagne de vaccination contre la COVID 19
Tous droits réservés © 2021
          </p>
        <div className="copyright">Copyright &copy; 2021</div>
        <BackTop>
          <div className="goTop"><i className="fas fa-arrow-circle-up"></i></div>
        </BackTop>
      </div>
    </div>
  );
}

export default AppFooter;