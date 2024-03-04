import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export function AccordionDemo() {
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
            <div style={{ width: "300px", height: "300px" }}>
                <Accordion type="single" collapsible className="w-full h-full">
                    {accordionItems.map((item) => (
                        <AccordionItem key={item.value} value={item.value}>
                            <AccordionTrigger>{item.question}</AccordionTrigger>
                            <AccordionContent>{item.answer}</AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </div>
    );
}

const accordionItems = [
    {
        value: "item-1",
        question: "Is it accessible?",
        answer: "Yes. It adheres to the WAI-ARIA design pattern.",
    },
    {
        value: "item-2",
        question: "Is it styled?",
        answer: "Yes. It comes with default styles that matches the other components' aesthetic.",
    },
    {
        value: "item-3",
        question: "Is it animated?",
        answer: "Yes. It's animated by default, but you can disable it if you prefer.",
    },
];
