import React from "react";
import Button from "../Components/Button";
import "../Sass/Detail/DetailMobile/detailMobile.css";

function DetailMobile() {
  return (
    <>
      <div className="detail__card">
        <div className="detail__card-logo"></div>
        <div className="detail__card-profile">
          <h4>Scoot</h4>
          <p>scoot.com</p>
          <Button title="Company Site" btnStyle="detail__card-btn" />
        </div>
      </div>

      <div className="main__detail">
        <div className="main__detail-time">
          <p>1wk ago</p>
          <div className="main__detail-dot"></div>
          <p>Full time</p>
        </div>

        <div className="main__detail-role">
          <h4>Senior Software Engineer</h4>
        </div>

        <div className="main__detail-location">
          <p>United Kingdom</p>
        </div>

        <div className="main__detail-button">
          <Button title="Apply Now" btnStyle="apply-btn" />
        </div>

        <div className="main__detail-para">
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus
            hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque,
            aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula
            sollicitudin laoreet viverra, tortor libero sodales leo, eget
            blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse
            potenti. Sed egestas, ante et vulputate volutpat, eros pede semper
            est, vitae luctus metus libero eu augue. Morbi purus libero,
            faucibus adipiscing, commodo quis, gravida id, est. Sed lectus.
            Praesent elementum hendrerit tortor. Sed semper lorem at felis.
            Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod
            dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu,
            dapibus eu, fermentum et, dapibus sed, urna.
          </p>
        </div>

        <div className="main__detail-requirement">
          <h4>Requirements</h4>
          <p>
            Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia, magna
            a ullamcorper laoreet, lectus arcu pulvinar risus, vitae facilisis
            libero dolor a purus. Sed vel lacus. Mauris nibh felis, adipiscing
            varius, adipiscing in, lacinia vel, tellus. Suspendisse ac urna.
            Etiam pellentesque mauris ut lectus. Nunc tellus ante, mattis eget,
            gravida vitae, ultricies ac, leo. Integer leo pede, ornare a,
            lacinia eu, vulputate vel, nisl.
          </p>

          <ul>
            <li>Morbi interdum mollis sapien. Sed</li>
            <li>
              Phasellus lacinia magna a ullamcorper laoreet, lectus arcu
              pulvinar risus
            </li>
            <li>
              Mauris nibh felis, adipiscing varius, adipiscing in, lacinia vel,
              tellus. Suspendisse ac urna. Etiam pellentesque mauris ut lectus.
            </li>
            <li>Morbi interdum mollis sapien. Sed</li>
          </ul>
        </div>
        <div className="main__detail-description">
          <h4>What You Will Do</h4>

          <p>
            Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae
            luctus metus libero eu augue. Morbi purus libero, faucibus
            adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent
            elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum
            volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu
            pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu,
            fermentum et, dapibus sed, urna.
          </p>

          <ol>
            <li>Morbi interdum mollis sapien. Sed</li>
            <li>
              Phasellus lacinia magna a ullamcorper laoreet, lectus arcu
              pulvinar risus
            </li>
            <li>
              Mauris nibh felis, adipiscing varius, adipiscing in, lacinia vel,
              tellus. Suspendisse ac urna. Etiam pellentesque mauris ut lectus.
            </li>
            <li>Morbi interdum mollis sapien. Sed</li>
          </ol>
        </div>
      </div>

      <div className="main__detail-footer">
        <Button title="Apply Now" btnStyle="apply-btn" />
      </div>
    </>
  );
}

export default DetailMobile;
