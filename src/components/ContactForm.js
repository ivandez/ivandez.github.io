import React from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mleabvdq");
  if (state.succeeded) {
    return <p className="text-white">¡Gracias por contactarme!</p>;
  }
  return (
    <div className="text-center my-2">
      <form onSubmit={handleSubmit}>
        <div>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Tu email"
            className="w-11/12 my-1 p-2 rounded"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div>
          <textarea
            id="message"
            name="message"
            placeholder="Tu mensaje"
            className="w-11/12 my-1 p-2 rounded"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
        <button
          type="submit"
          disabled={state.submitting}
          className="bg-white text-myColor w-11/12 rounded hover:bg-myColor hover:text-white transition duration-300"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}
