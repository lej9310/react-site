import '../../../App.css'
import Ex_cont_provider from './Ex_count_provider';
import Ex1_Provider from './compo/Ex1_Provider';
import Ex2_js from './compo/Ex2_js';
import Ex3_zustand from './compo/Ex3_zustand';
// reduxtoolkit 설치 먼저 => npm install @reduxjs/toolkit react-redux
import Ex4_reduxtoolkit from './compo/Ex4_reduxtoolkit';
import { Provider } from 'react-redux'
import { store_redux } from './js/store_redux';

function D07P1() {


  return (
    <>
      {/* Context API 예제 */}
      <Ex_cont_provider>
        <Ex1_Provider />
      </Ex_cont_provider>
      <br />
      <hr />

      {/* 외부 js 사용 예제 */}
      <Ex2_js />
      <br />
      <hr />

      {/* zustand */}
      <Ex3_zustand />
      <br />
      <hr />

      {/* redux-toolkit */}
      <Provider store={store_redux}>
        <Ex4_reduxtoolkit />
      </Provider>
      <br />
      <hr />
    </>

  )
}

export default D07P1
