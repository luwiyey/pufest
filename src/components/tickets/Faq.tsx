
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqItems = [
    {
        question: "Are tickets for the 2025 festival still available?",
        answer: "Sales for the Panpacific Festival 2025 have officially ended. The information on this page is for reference only. Keep an eye out for announcements for next year's event!"
    },
    {
        question: "What were the ticket prices?",
        answer: "General Admission was ₱749, VIP was ₱1,499, and VVIP was ₱2,999. These were the prices for the 2025 festival and may change for future events."
    },
    {
        question: "What was the 'Buy 5, Get 1 Free' promo?",
        answer: "This was a special promotion for the 2025 festival where purchasing five tickets of the same tier would grant you one additional ticket of that same tier for free."
    },
    {
        question: "What did the VVIP ticket include?",
        answer: "The VVIP ticket included all the benefits of General Admission and VIP, plus exclusive front-of-stage access, an entry into the Meet & Greet raffle, and unlimited drinks."
    },
    {
        question: "When will tickets for the next festival go on sale?",
        answer: "We haven't announced the dates for the next Panpacific Festival yet. Please subscribe to our newsletter or follow our social media channels to be the first to know!"
    }
]

export default function Faq() {
  return (
    <Accordion type="single" collapsible className="w-full">
        {faqItems.map((item, index) => (
            <AccordionItem value={`item-${index + 1}`} key={index} className="bg-card/50 backdrop-blur-sm border-b-border/50 rounded-lg mb-2 px-4">
                <AccordionTrigger className="text-left hover:no-underline">{item.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                    {item.answer}
                </AccordionContent>
            </AccordionItem>
        ))}
    </Accordion>
  )
}
