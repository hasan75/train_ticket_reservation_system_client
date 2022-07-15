import React from 'react';
import { useForm } from 'react-hook-form';

const Note = () => {
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

  const {
    handleSubmit,
    register,
    formState: { error },
    watch,
  } = useForm({
    mode: 'all',
    defaultValues: {
      Note: defaultText,
    },
  });

  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='row d-flex justify-content-center'>
        <div className='col-6'>
          <label className='fw-bold mb-2'>Note</label>
          <textarea
            name='Note'
            className='form-control'
            rows='10'
            {...register('Note', { required: true })}
          />
        </div>
      </div>
    </form>
  );
};

export default Note;