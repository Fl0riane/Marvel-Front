import "./modal.css";
import { Link } from "react-router-dom";
import "../LoginForm";
import "../SignUpForm";
import logoFb from "../../assets/img/logofb.png";
import logoGoogle from "../../assets/img/logogoogle.png";
import logoApple from "../../assets/img/logoapple.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Modal = ({ setVisible }) => {
  return (
    <div className="modal-root">
      <div
        className="modal"
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <button
          onClick={() => {
            setVisible(false);
          }}
        >
          <FontAwesomeIcon icon="fa-solid fa-xmark" />
        </button>

        <nav>
          <img src={logoFb} alt="" />
          <a href="https://www.facebook.com/login.php?skip_api_login=1&api_key=502159173164171&kid_directed_site=0&app_id=502159173164171&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fv13.0%2Fdialog%2Foauth%3Fapp_id%3D502159173164171%26cbt%3D1683527714554%26channel_url%3Dhttps%253A%252F%252Fstaticxx.facebook.com%252Fx%252Fconnect%252Fxd_arbiter%252F%253Fversion%253D46%2523cb%253Dfc429f9610349%2526domain%253Dwww.vinted.fr%2526is_canvas%253Dfalse%2526origin%253Dhttps%25253A%25252F%25252Fwww.vinted.fr%25252Ff2ceaa73d355f34%2526relation%253Dopener%26client_id%3D502159173164171%26display%3Dpopup%26domain%3Dwww.vinted.fr%26e2e%3D%257B%257D%26fallback_redirect_uri%3Dhttps%253A%252F%252Fwww.vinted.fr%252F%26locale%3Den_US%26logger_id%3Df14496f09492e24%26origin%3D1%26redirect_uri%3Dhttps%253A%252F%252Fstaticxx.facebook.com%252Fx%252Fconnect%252Fxd_arbiter%252F%253Fversion%253D46%2523cb%253Df2b279ddf2208%2526domain%253Dwww.vinted.fr%2526is_canvas%253Dfalse%2526origin%253Dhttps%25253A%25252F%25252Fwww.vinted.fr%25252Ff2ceaa73d355f34%2526relation%253Dopener%2526frame%253Df28efe0d7d9fc08%26response_type%3Dtoken%252Csigned_request%252Cgraph_domain%26scope%3Demail%26sdk%3Djoey%26version%3Dv13.0%26ret%3Dlogin%26fbapp_pres%3D0%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df2b279ddf2208%26domain%3Dwww.vinted.fr%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fwww.vinted.fr%252Ff2ceaa73d355f34%26relation%3Dopener%26frame%3Df28efe0d7d9fc08%26error%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied&display=popup&locale=fr_FR&pl_dbl=0">
            Continuer avec Facebook
          </a>
        </nav>
        <nav>
          <img src={logoGoogle} alt="" />
          <a href="https://accounts.google.com/v3/signin/identifier?dsh=S2131635123%3A1683527836285230&access_type=offline&client_id=370947398364-4ei5612p3evupc6qm8frglhfk356l7ib.apps.googleusercontent.com&o2v=1&redirect_uri=https%3A%2F%2Fwww.vinted.fr%2Fmember%2Fsignup%2Fselect_type&response_type=code&scope=email+profile&service=lso&state=eyJyZWRpcmVjdF91cmkiOiIvIiwicmFuZG9tX3N0cmluZyI6IjA4YWRhZmI3%0AZmYifQ%3D%3D%0A&flowName=GeneralOAuthFlow&continue=https%3A%2F%2Faccounts.google.com%2Fsignin%2Foauth%2Fconsent%3Fauthuser%3Dunknown%26part%3DAJi8hAMgSjRBH187VldqK9w81X1AADntIDwKnHZydRawx1qulladcGOGwK3DY2WDTLjJwIX8yWxvKNcIxrCUjiOps6go-3mmJsO6jAJtB-l6f3_SQRIc56bNICW8nzAdJjnTectshdYtJ2mqhBMip_1i0CmE4b2jDZwAU7KuQK3iNgl-Z20Zxr1Pq2EYKDNQDnSB07heoDuR7Tm5ol-dwZ42vclXm9JzcivVSeW-Utg7Eq8_jJVyzXGz0zv8XxmN0mqzLG_crIi5qmNUV1Fdhvl8aPkx0EIfjNRgf47acM9E638WUdy4E3NcnjL25qgwtvAqbfV3-cWcO5_u4JYtiR_vEn1XoyvULAj0w2m3SneAqkULmWZ-Zia2QA-DZHLij-KBXkq0FxvITaB4tcm6_6PKacDx27sr8QpivWH31QKYkeJ0_0n8hNNF1U9AsaYe5PJWKt2x0x1L76-g7wLiR3klRCWQIPtTFw%26as%3DS2131635123%253A1683527836285230%26client_id%3D370947398364-4ei5612p3evupc6qm8frglhfk356l7ib.apps.googleusercontent.com%23&app_domain=https%3A%2F%2Fwww.vinted.fr&rart=ANgoxccyKy2X8ZnQu96PxlocFwfz8qQwt_9-QZssRLM4pQn0F25qqKIXtwq7056BJBOzsNdmPlilGsFYhVjZYc6qh-wQQkn-Bg">
            Continuer avec Google
          </a>
        </nav>
        <nav>
          <img src={logoApple} alt="" />
          <a href="https://appleid.apple.com/auth/authorize?client_id=lt.manodrabuziai.fr.web&redirect_uri=https%3A%2F%2Fwww.vinted.fr&response_type=code%20id_token&state=init&scope=name%20email&response_mode=web_message&frame_id=1fcfc403-2d0c-4ea6-9327-10381fbe6ad7&m=11&v=1.5.4">
            Continuer avec Apple
          </a>
        </nav>

        <button
          onClick={() => {
            setVisible(false);
          }}
        >
          <Link to="/user/signup">
            <div>
              <p>Ou inscris-toi avec</p>
              <p className="white">Email</p>
            </div>
          </Link>

          <Link to="/user/login">
            <div>
              <p>Tu as déjà un compte</p> <p className="white">Se connecter</p>
            </div>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Modal;
