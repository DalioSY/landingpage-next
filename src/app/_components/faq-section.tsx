import { AccordionSection } from "./accordion-section";
import { Accordion } from '@/components/ui/accordion';

export function FaqSection() {
  return (
    <section id="faq" className="bg-slate-50 dark:bg-transparent container space-y-6 py-8 md:py-12 lg:py-24">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y4 text-center">
        <h2 className="font-heading text-3xl leading-[1,1] sm:text-3xl md:text-6xl">
          Faq
        </h2>
      </div>
      <div className="mx-auto text-center md:max-w-[58rem]">
        <p className="leading-normal text-muted-foreground sm:text-lg sm:leading-7 mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem provident distinctio nihil aperiam odit iure minus in! Laborum repudiandae, enim, quos odit dolorum optio vitae excepturi id minus obcaecati nam?
        </p>
        <Accordion type='single' collapsible className='w-full'>
          <AccordionSection
            number='1'
            title='Como comprar o curso?'
            text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis autem enim nulla, delectus, ipsam sequi aperiam unde odit nam iste asperiores quam corrupti assumenda nostrum rem aut non consequatur facilis.'
          />
          <AccordionSection
            number='2'
            title='Como comprar o curso?'
            text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis autem enim nulla, delectus, ipsam sequi aperiam unde odit nam iste asperiores quam corrupti assumenda nostrum rem aut non consequatur facilis.'
          />
          <AccordionSection
            number='3'
            title='Como comprar o curso?'
            text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis autem enim nulla, delectus, ipsam sequi aperiam unde odit nam iste asperiores quam corrupti assumenda nostrum rem aut non consequatur facilis.'
          />
          <AccordionSection
            number='4'
            title='Como comprar o curso?'
            text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis autem enim nulla, delectus, ipsam sequi aperiam unde odit nam iste asperiores quam corrupti assumenda nostrum rem aut non consequatur facilis.'
          />
          <AccordionSection
            number='5'
            title='Como comprar o curso?'
            text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis autem enim nulla, delectus, ipsam sequi aperiam unde odit nam iste asperiores quam corrupti assumenda nostrum rem aut non consequatur facilis.'
          />
        </Accordion>
      </div>
    </section>
  )
}