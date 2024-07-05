import { AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

interface TypeAccordionSection {
  number: string;
  title: string;
  text: string
}

export function AccordionSection({ number, title, text }: TypeAccordionSection) {
  return (
    <AccordionItem value={`item-${number}`}>
      <AccordionTrigger>{number}-{title}</AccordionTrigger>
      < AccordionContent className='text-left'> {text} </AccordionContent>
    </AccordionItem>
  );
}