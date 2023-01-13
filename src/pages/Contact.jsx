import React from "react";
import { useForm } from "react-hook-form";

export default function Contact() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <>
    <div className="name_page">
      <div className="line"></div>
      <span className="name">CONTACT</span>
    </div>
    <main>
      <div className="contact_intro">
        <div className="hero">
          <img
            className="mobile"
            src="../../contact/mobile/image-hero.jpg"
            alt=""
          />
          <img
            className="tablet"
            src="../../contact/tablet/image-hero.jpg"
            alt=""
          />
          <img
            className="desktop"
            src="../../contact/desktop/image-hero.jpg"
            alt=""
          />
        </div>
        <h1 className="large_title">Contact</h1>
        <div className="box_text">
          <h1>
            Tell us about <br />
            your project
          </h1>
          <p>
            We’d love to hear more about your project. Please, leave a message
            below or give us a call. We have two offices, one in Texas and one
            in Tennessee. If you find yourself nearby, come say hello!
          </p>
        </div>
      </div>

      <div className="contact_details">
        <h1>Contact Details</h1>

        <div className="office o1">
          <h3>Main Office</h3>
          <div className="infos_links">
            <div className="infos">
              <p>Mail:</p>
              <p>archone@mail.com</p>
              <p>Address:</p>
              <p>1892 Chenoweth Drive TN</p>
              <p>Phone</p>
              <p>123-456-3451</p>
            </div>
            <a href="#">
              View on map <img src="../../icons/icon-arrow.svg" alt="" />
            </a>
          </div>
        </div>

        <div className="office o2">
          <h3>Office II</h3>
          <div className="infos_links">
            <div className="infos">
              <p>Mail:</p>
              <p>archtwo@mail.com</p>
              <p>Address:</p>
              <p>3399 Wines Lane TX</p>
              <p>Phone</p>
              <p>832-123-4321</p>
            </div>
            <a href="#">
              View on map <img src="../../icons/icon-arrow.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className="contact_map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20219.989076700338!2d-148.83266754186334!3d63.65189889812983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x56ccd8af137b7d57%3A0x20a83e444230f704!2sDenali%20Park%20Village!5e0!3m2!1sfr!2sfr!4v1672405543600!5m2!1sfr!2sfr"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Connect with us</h1>
        <div className="all_inputs">
          <div className="box_input">
            <input
              placeholder="Name"
              {...register("name", { required: true })}
            />
          </div>
          <div className="box_input">
            <input
              placeholder="Email"
              type="email"
              {...register("email", { required: true })}
            />
          </div>

          <div className="box_input">
            <textarea
              placeholder="Message"
              {...register("message", { required: true })}
              name=""
              id=""
              rows="3"
            ></textarea>
            {errors.exampleRequired && <span>This field is required</span>}
          </div>
          <button>
            <img src="../../icons/icon-arrow-white.svg" alt="" />
          </button>
        </div>
      </form>
    </main>
    </>
  );
}
