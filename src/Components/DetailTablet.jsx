import React from "react";
import "../Sass/Detail/DetailTablet/detailTablet.css";
import Button from "../Components/Button";

function DetailTablet() {
  return (
    <>
      <div className="tablet__detail__card">
        <div className="tablet__detail__card-profile">
          <div className="tablet__detail__card-logo"></div>
          <div className="tablet__detail__card-name">
            <h4>Scoot</h4>
            <p>scoot.com</p>
          </div>
          <Button title="Company Site" btnStyle="tablet__detail__card-btn" />
        </div>
      </div>

      <div className="tablet__detail__main">
        <div className="tablet__detail__main-header">
          <div className="tablet__detail__main-headertext">
            <div className="tablet__detail__main-time">
              <p>1wk ago</p>
              <div className="tablet__detail__main-dot"></div>
              <p>Part time</p>
            </div>
            <div className="tablet__detail__main-role">
              <h2>Senior Software Engineer</h2>
            </div>
            <div className="tablet__detail__main-location">
              <p>United Kingdom</p>
            </div>
          </div>
          <div className="tablet__detail__main-headerbtn">
            <Button title="Apply Now" btnStyle="tablet-apply-btn" />
          </div>
        </div>

        <div className="tablet__detail__main-para">
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

        <div className="tablet__detail__main-requirement">
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
        <div className="tablet__detail__main-description">
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

      <div className="tablet__footer">
        <div className="tablet__footer-role">
          <h2>Senior Software Engineer</h2>
          <p>So Digital Inc.</p>
        </div>
        <div className="tablet__footer-btn">
          <Button title="Apply Now" btnStyle="tablet-apply-btn" />
        </div>
      </div>
    </>
  );
}

export default DetailTablet;
