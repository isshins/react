import React, {Component} from 'react';
import Jumpcard from './component/jumpcard.js'



export default class HomePage extends Component {
  render() {
    return (
      <div className="homepage">
          <div className="topimage"></section>
          <div className="body">
            <h2>ブロックチェーンやReactによるwebアプリケーション作成を学ぼう！</h2>
            <p>
              この団体は主にブロックチェーンの勉強会やJavascriptによるReactの勉強会を行います！<br/>
              経験者はもちろん、初心者も一緒に成長していこうというスタンスなので、少しでも興味があればどうですか？<br/>
              これからの情報の社会に向けて先取りしちゃいましょう!!<br/>
            </p>
          </section>
          <Jumpcard thumnail1= title1= button1= thumnail2= title2= button2= thumnail3= title3= button3= />
      </div>
      )
  }
};
