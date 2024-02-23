document.getElementById("delivery-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const address = document.getElementById("address").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const deliveryTime = document.getElementById("delivery-time").value;

    // Send a request to the server to place the delivery order
    fetch("/order", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, address, phone, deliveryTime }),
        })
        .then((response) => response.json())
        .then((data) => {
            if (data.success) {
                document.getElementById("message").innerText = "Delivery order placed successfully!";
            } else {
                document.getElementById("message").innerText = "Error placing delivery order.";
            }
        });
});