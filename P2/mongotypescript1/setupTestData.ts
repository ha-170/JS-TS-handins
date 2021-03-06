import { Collection } from "mongodb";

export default async function setupData(inventoryCollection: Collection) {
    await inventoryCollection.deleteMany({});
    return inventoryCollection.insertMany([
        {
            item: "journal",
            qty: 25,
            size: { h: 14, w: 21, uom: "cm" },
            status: "A",
            tags: ["blank", "red"],
            dim_cm: [14, 21],
            instock: [{ warehouse: "A", qty: 5 }],
        },
        {
            item: "notebook",
            qty: 50,
            size: { h: 8.5, w: 11, uom: "in" },
            status: "A",
            tags: ["red", "blank"],
            dim_cm: [14, 21],
            instock: [{ warehouse: "B", qty: 5 }],
        },
        {
            item: "paper",
            qty: 100,
            size: { h: 8.5, w: 11, uom: "in" },
            status: "D",
            tags: ["red", "blank", "plain"],
            dim_cm: [14, 21],
            instock: [{ warehouse: "A", qty: 60 }],
        },
        {
            item: "planner",
            qty: 75,
            size: { h: 22.85, w: 30, uom: "cm" },
            status: "D",
            tags: ["blank", "red"],
            dim_cm: [22.85, 30],
            instock: [{ warehouse: "A", qty: 40 }],
        },
        {
            item: "postcard",
            qty: 45,
            size: { h: 10, w: 15.25, uom: "cm" },
            status: "A",
            tags: ["blue"],
            dim_cm: [10, 15.25],
            instock: [
                { warehouse: "B", qty: 15 },
                { warehouse: "C", qty: 35 },
            ],
        },
        {
            item: "sketchbook",
            tags: ["black"],
            qty: 80,
            size: { h: 14, w: 21, uom: "cm" },
            dim_cm: [14, 21],
            status: "A",
            instock: [{ warehouse: "A", qty: 23 }],
        },
        {
            item: "sketch pad",
            qty: 95,
            size: { h: 22.85, w: 30.5, uom: "cm" },
            dim_cm: [22.85, 30],
            status: "A",
            instock: [{ warehouse: "D", qty: 7 }],
        },
    ]);
}
