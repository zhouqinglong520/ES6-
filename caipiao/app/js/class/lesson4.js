{
  console.log('a',`\u0061`);
  console.log('s',`\u20BB7`);

  console.log('s',`\u{20BB7}`); //𠮷


}


{
  let s='𠮷';
  console.log('length',s.length); //2 码值大于两个字节， 计算长度时每两个字节有一个长度
  console.log('0',s.charAt(0));
  console.log('1',s.charAt(1));
  console.log('at0',s.charCodeAt(0)); //取码值api ，es5对unicod处理不当
  console.log('at1',s.charCodeAt(1));

  let s1='𠮷a';
  console.log('length',s1.length);  //3
  console.log('code0',s1.codePointAt(0)); //取码值的es6 api 
  console.log('code0',s1.codePointAt(0).toString(16));//转为16进制
  console.log('code1',s1.codePointAt(1));
  console.log('code2',s1.codePointAt(2));
}

{
  console.log(String.fromCharCode("0x20bb7"));
  console.log(String.fromCodePoint("0x20bb7"));
}

{
  let str='\u{20bb7}abc';
  for(let i=0;i<str.length;i++){
    console.log('es5',str[i]);
  }
  for(let code of str){
    console.log('es6',code);
  }
}

{
  let str="string";
  console.log('includes',str.includes("c"));
  console.log('start',str.startsWith('str'));
  console.log('end',str.endsWith('ng'));
}

{
  let str="abc";
  console.log(str.repeat(2));
}

{
  let name="list";
  let info="hello world";
  let m=`i am ${name},${info}`; //字串模板
  console.log(m);
}

{
  console.log('1'.padStart(2,'0'));//往前补0至两位数
  console.log('1'.padEnd(2,'0')); //往后补0至两位数
}

{
  let user={
    name:'list',
    info:'hello world'
  };
  console.log(abc`i am ${user.name},${user.info}`);
  function abc(s,v1,v2){
    console.log(s,v1,v2);
    return s+v1+v2       //标签模板
  }
}

{
  console.log(String.raw`Hi\n${1+2}`); //raw() 实现 禁止斜杠转译
  console.log(`Hi\n${1+2}`);
}
