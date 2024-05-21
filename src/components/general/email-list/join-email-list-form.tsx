'use client'

import * as z from 'zod';
import { JoinEmailListSchema } from '@/schemas';
import {
  Form, FormControl, FormField, FormItem, FormLabel, FormMessage
} from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { addToEmailList } from '@/actions/email-list';

import { useState, useTransition } from 'react';
import { Input } from '@/components/aceternity/input';

const JoinEmailListForm = () => {

  const [isPending, startTransition] = useTransition();
  const {error, setError} = useState<string | undefined>(null);
  const {success, setSuccess} = useState<string | undefined>(false);

  const form = useForm<z.infer<typeof JoinEmailListSchema>>({
    resolver: zodResolver(JoinEmailListSchema),
    defaultValues: {
      email: ''
    }
  });

  const onSubmit = (values: z.infer<typeof JoinEmailListSchema>) => {
    setSuccess(false)
    setError("")
    startTransition(() => {
      addToEmailList(values.email).then((data) => {
        setError(data.error)
        setSuccess(data.success)
      })
    })
  }


  return ( 
    <Form { ...form }>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='space-y-6 relative z-10'
      >
        <FormField 
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  { ...field }
                  type='email'
                  placeholder='welcome@sweetbeasts.com'
                  />
              </FormControl>
              <FormMessage/>
            </FormItem>
          )}
        />
        <Button>

        </Button>
      </form>
    </Form>
   );
}
 
export default JoinEmailListForm;