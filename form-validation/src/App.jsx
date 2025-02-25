import { ErrorMessage, Field, FieldArray, Form, Formik } from "formik";
import * as Yup from "yup";

const nameSchema = Yup.string()
    .required("name is require")
    .min(3, "the name must be at least 3 characters, unless you're chinese")
    .max(42, "the name must be at most 42 characters, unless you're polish");

const registrationValidationSchema = Yup.object({
    firstName: nameSchema,
    lastName: nameSchema,
    email: Yup.string().email().required("Put your email mate, put it now"),
    phone: Yup.string()
        .test({
            message: "phone number isnt valid",
            test: (phone) => /^(00213|\+213|0)(5|6|7)[0-9]{8}$/.test(phone),
        })
        .required(),
    address: Yup.array(Yup.string("Really dude ? Enter a string !"))
        .required()
        .min(1, "Nice try, no one lives in a single digit address.")
        .max(20, "Just put your address, not your entire family tree."),
});

export default function App() {
    return (
        <div>
            <Formik
                initialValues={{
                    firstName: "",
                    lastName: "",
                    email: "",
                    phone: "",
                    address: [""],
                }}
                validationSchema={registrationValidationSchema}
                onSubmit={(values) => {
                    console.log(values);
                }}
            >
                <Form>
                    <Field
                        type="text"
                        name="firstName"
                        placeholder="First name"
                    ></Field>
                    <ErrorMessage
                        components="p"
                        name="firstName"
                        className="error-message"
                    />
                    <Field
                        type="text"
                        name="lastName"
                        placeholder="Last name"
                    ></Field>
                    <ErrorMessage
                        components="p"
                        name="lastName"
                        className="error-message"
                    />
                    <Field
                        type="email"
                        name="email"
                        placeholder="Email"
                    ></Field>
                    <ErrorMessage
                        components="p"
                        name="email"
                        className="error-message"
                    />
                    <Field
                        type="number"
                        name="phone"
                        placeholder="Phone number"
                    ></Field>
                    <ErrorMessage
                        components="p"
                        name="phone"
                        className="error-message"
                    />
                    <FieldArray
                        name="address"
                        render={({ form, push, remove }) => (
                            <>
                                {form.values.address.map((_, i) => (
                                    <div className="address" key={i}>
                                        <Field
                                            className=""
                                            placeholder={"Adress number " + i}
                                            name={"address." + i}
                                            type="text"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => remove(i)}
                                        >
                                            -
                                        </button>
                                    </div>
                                ))}
                                {/* error in not using length */}
                                {form.values.address.length < 4 && (
                                    <button
                                        type="button"
                                        onClick={() => push("")}
                                    >
                                        +
                                    </button>
                                )}
                            </>
                        )}
                    />
                </Form>
            </Formik>
        </div>
    );
}
