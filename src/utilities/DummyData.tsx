
interface ShipmentDataType {
    trackingId: string;
    sender: string;
    receiver: string;
    pickUp: string;
    deliveryTo: string;
    amount: string;
    deliveryStatus: string;
    paymentStatus: string;
    processingTime: string;
}

export const ShipmentData: ShipmentDataType[] = [
    {
        trackingId: "MAF-100-234-291",
        sender: "Bunmi Tanny",
        receiver: "Mercy",
        pickUp: "Lagos, Nigeria",
        deliveryTo: "Oyo Nigeria",
        amount: "2,000",
        deliveryStatus: "In-Transit",
        paymentStatus: "Paid",
        processingTime: "5",
    },
    {
        trackingId: "MAF-100-234-292",
        sender: "John Doe",
        receiver: "Jane Smith",
        pickUp: "Abuja, Nigeria",
        deliveryTo: "Lagos, Nigeria",
        amount: "3,500",
        deliveryStatus: "Delayed",
        paymentStatus: "Pending",
        processingTime: "3",
    },
    {
        trackingId: "MAF-100-234-293",
        sender: "Alice Johnson",
        receiver: "Bob Brown",
        pickUp: "Port Harcourt, Nigeria",
        deliveryTo: "Enugu, Nigeria",
        amount: "1,500",
        deliveryStatus: "In-Transit",
        paymentStatus: "Paid",
        processingTime: "4",
    },
    {
        trackingId: "MAF-100-234-294",
        sender: "Charlie Davis",
        receiver: "Eve White",
        pickUp: "Ibadan, Nigeria",
        deliveryTo: "Kaduna, Nigeria",
        amount: "2,800",
        deliveryStatus: "Pending",
        paymentStatus: "Paid",
        processingTime: "6",
    },
    {
        trackingId: "MAF-100-234-295",
        sender: "David Wilson",
        receiver: "Grace Green",
        pickUp: "Benin City, Nigeria",
        deliveryTo: "Calabar, Nigeria",
        amount: "4,000",
        deliveryStatus: "Delivered",
        paymentStatus: "Pending",
        processingTime: "2",
    },
]