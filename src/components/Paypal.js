import React, {useRef, useEffect} from "react";

export default function Paypal(props) {
    const paypal = useRef();

    useEffect(() => {
        window.paypal.Buttons({
            createOrder: (data, actions, err) => {
                return actions.order.create({
                    intent: "CAPTURE",
                    purchase_units: [
                        {
                            description: props.description,
                            amount: {
                                currency_code: "USD",
                                value: props.final_amount
                            }
                        },
                    ]
                });
            },
            onApprove: async (data, actions) => {
                const order = await actions.order.capture();
                console.log(order);
                alert("Purchase complete")
            },
            onError: (err) => {
                console.log(err);
            }
        }).render(paypal.current);
        // eslint-disable-next-line
    }, []);

    return (
        <div>
            <div ref={paypal}></div>
        </div>
    );
}