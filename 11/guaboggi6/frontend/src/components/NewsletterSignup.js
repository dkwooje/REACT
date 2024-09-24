import { useFetcher } from 'react-router-dom';
import { useEffect } from 'react';

import classes from './NewsletterSignup.module.css';

function NewsletterSignup() {
  const fetcher = useFetcher();
  const { data, state } = fetcher;

  useEffect(()=>{
    if(state === 'idle' && data && data.message) {
      window.alert(data.message);
    }
  }, [data,state]);

  return (
    <fetcher.Form method="post" action="/newsletter" className={classes.newsletter}>
      <input
        type="email"
        placeholder="여기에 이메일을 입력해서 구독..."
        aria-label="뉴스레터 구독하기"
      />
      <button>구독</button>
    </fetcher.Form>
  );
}

export default NewsletterSignup;
