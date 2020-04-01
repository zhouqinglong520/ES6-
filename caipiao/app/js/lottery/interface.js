//期号和时间从服务端中获取过来
//投注以及获奖的号，都是交互通信的
import $ from 'jquery';

class Interface {
    getOmit(issue) {
        let self = this;
        return new Promise((resolve, reject) => {
            $.ajax({
                url: '/get/omit',
                data: {
                    issue: issue
                },
                dataType: 'json',
                success: function (res) {
                    self.setOmit(res.data);
                    resolve.call(self, res)
                },
                error: function (err) {
                    reject.call(err);
                }
            })
        });
    }
    getOpenCode(issue) {
        let self = this;
        return new Promise((resolve, reject) => {
            $.ajax({
                url: '/get/opencode',
                data: {
                    issue: issue

                },
                dataType: 'json',
                success: function (res) {
                    self.setOpenCode(res.data);
                    resolve.call(self, res);
                },
                error: function (err) {
                    reject.call(err);
                }
            })
        });

    }
    getState(issue) {//期号 issue
        let self = this;
        return new Promise((resolve, reject) => {
            $.ajax({
                url: '/get/state',
                data: {
                    issue: issue
                },
                dataType: 'json',
                success: function (res) {

                    resolve.call(self, res);
                },
                error: function (err) {
                    reject.call(err);
                }
            })
        });

    }

}

export default Interface