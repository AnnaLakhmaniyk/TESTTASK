import s from './UserInfo.module.css';
export const UserInfo = () => {
  return (
    <div className={s.wrap}>
      <div className={s.literature}>
        <h2 className={s.title}> Useful literature </h2>
        <ul>
          <li>
            <a
              href="https://theqalead.com/tools/qa-automation-tools/"
              className={s.linkLiteratur}
            >
              1. The Best QA Automation Tools List
            </a>
          </li>
          <li>
            <a
              href="https://www.testim.io/blog/test-automation-frameworks"
              className={s.linkLiteratur}
            >
              2. Your Complete Guide to Test Automation Frameworks
            </a>
          </li>
          <li>
            <a
              href="https://go.testim.io/qalead-best-qa-automation-tools?utm_campaign=QA%2520Lead%2520Pages&utm_source=QA%2520Lead&utm_medium=Best%2520QA%2520Automation%2520Tools"
              className={s.linkLiteratur}
            >
              3. Testim Automate
            </a>
          </li>
        </ul>
      </div>
      <div className={s.resources}>
        <h2 className={s.title}>Useful resources</h2>
        <ul>
          <li>
            <a href="https://dou.ua/" className={s.linkRsourse}>
              1.dou.ua
            </a>
          </li>
          <li>
            <a
              href="https://en.wikipedia.org/wiki/Habr"
              className={s.linkRsourse}
            >
              2.Habr
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/" className={s.linkRsourse}>
              3.facebook.com/QA
            </a>
          </li>
          <li>
            <a href="https://goit.ua/" className={s.linkRsourse}>
              4.goit.ua
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
