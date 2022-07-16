import React from 'react';
import { useForm } from 'react-hook-form';

const PreviewInfo = () => {
  const {
    handleSubmit,
    formState: { errors },
    register,
    watch,
  } = useForm();

  const onSubmit = (values) => {
    console.log(values);
  };

  let defaultText = `"
  ,'"" ./\=?!:;
  "",""a"",""b""
  ヲンヰヱヴーヾ・
  ｧｰｭｿﾏﾞﾟ
  ㌶Ⅲ⑳㏾☎㈱髙﨑
  ¢£¬‖−〜―
  <script>alert('Bug!!!');</script>
  &lt;&copy;&amp;
  జ్ఞాజ్ఞాజ్ఞాజ్ఞాజ్ఞాజ్ఞాజ్ఞాజ్ఞాజ్ఞాజ్ఞా
  జ్ఞాజ్ఞాజ్ఞాజ్ఞాజ్ఞాజ్ఞాజ్ఞాజ్ఞాజ్ఞాజ్ఞా
  §¦ЙЁКД§∪§¦ЙЁКД§
  t҉̠̩̰͔͇͔͓̤͕̪̱̗̖̳̭͒̊̓̆̂͌̐̿̎̈́͂̓̇̆e҉͉̤̣̤͕̙̖͓͍͇̤͔͎̦̗̣͎͓̖̫͂̌̿͂͐̈̽̋͛̈̀̂́̂̐̽̂̓̇̆̅͗ͅx҉̰̤̰͉͕̪̙͖̭̜̪͎̮̗̞͇̞̫̬̝̲͈̔́̔͋̿̆̒̋͗͋̀͌͋̈́͂̃̒ͅt̸͚͖͙̮̘̥̯̞͈̲͚̱͚́͒̐̾̋͋̔̓̉̋̈́̉͗̌͑́͌̉̀͂̂͂̌"							
                              
                              
                              
                              
                              
                              
                              
                              
                              
                              
                              
                              
                              
                              
                              
                              
                              
                              
                              
                              
                              `;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='row d-flex justify-content-center mt-5'>
        <div className='col-6'>
          <h5>Name: Bill Gates</h5>
          <h5>Gender: Male</h5>
          <h5>From: Tokyo</h5>
          <h5>To: Osaka</h5>
          <h5>Date: 2022/06/10</h5>
          <h5>Time: 14:30</h5>
          <h5>Amount: (JPY) ¥ 12,345,678</h5>
          <div className='col-12 mt-3'>
            <label className='h5 mb-2'>Note:</label>
            <textarea
              className='form-control position-relative'
              rows='10'
              value={defaultText}
            ></textarea>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PreviewInfo;
