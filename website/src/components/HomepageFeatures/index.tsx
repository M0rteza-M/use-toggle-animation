import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import { useToggleAnimation } from '../../../../use-toggle-animation';

export default function HomepageFeatures(): JSX.Element {
  const {message} = useToggleAnimation({message: 'test'});

  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {message}
        </div>
      </div>
    </section>
  );
}
