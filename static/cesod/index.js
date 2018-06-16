$(document).ready(function () {
    $('.logo').fadeIn(3000);
    $('.pic').animate({rotate: '360', width: '200px', height: '200px'}, 2000);
    $('select').change(function () {
        if ($(this).val()) {
            $(this).removeClass("empty");
        }
    });
});
$(function () {
        $("#form-in").bootstrapValidator({
            live: 'disabled',//验证时机，enabled是内容有变化就验证（默认），disabled和submitted是提交再验证
            excluded: [':disabled', ':hidden', ':not(:visible)'],//排除无需验证的控件，比如被禁用的或者被隐藏的
            submitButtons: 'button[type="submit"]',//指定提交按钮，如果验证失败则变成disabled，但我没试成功，反而加了这句话非submit按钮也会提交到action指定页面
            message: '您的输入有误',//好像从来没出现过
            feedbackIcons: {//根据验证结果显示的各种图标
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
                school: {
                    message: '学校填写有误',
                    validators: {
                        notEmpty: {
                            message: '学校不能为空'
                        },
                        stringLength: {
                            min: 4,
                            max: 18,
                            message: '请输入学校全称'
                        }
                        // ,regexp: {
                        //     regexp: /^[a-zA-Z0-9_]+$/,
                        //     message: '用户名只能包含大写、小写、数字和下划线'
                        // }
                    }
                },
                major: {
                    message: '专业填写有误',
                    validators: {
                        notEmpty: {
                            message: '专业不能为空'
                        },
                        stringLength: {
                            min: 2,
                            max: 18,
                            message: '请输入专业全称'
                        }
                        // ,regexp: {
                        //     regexp: /^[a-zA-Z0-9_]+$/,
                        //     message: '用户名只能包含大写、小写、数字和下划线'
                        // }
                    }
                },
                studentid: {
                    message: '学号填写有误',
                    validators: {
                        notEmpty: {
                            message: '学号不能为空'
                        },
                        stringLength: {
                            min: 6,
                            max: 12,
                            message: '学号必须在6-12位之间'
                        },
                        numeric: {
                            message: '学号只能为数字'
                        }
                    }
                },
                name: {
                    message: '姓名填写有误',
                    validators: {
                        notEmpty: {
                            message: '姓名不能为空'
                        },
                        stringLength: {
                            min: 2,
                            max: 20,
                            message: '姓名需在2-20位之间'
                        }
                        // ,regexp: {
                        //     regexp: /^[a-zA-Z0-9_]+$/,
                        //     message: '用户名只能包含大写、小写、数字和下划线'
                        // }
                    }
                },
                phone: {
                    message: '手机填写有误',
                    validators: {
                        notEmpty: {
                            message: '手机不能为空'
                        },
                        stringLength: {
                            min: 11,
                            max: 11,
                            message: '请输入正确的手机号'
                        },
                        numeric: {
                            message: '手机号只能为数字'
                        }
                        // ,regexp: {
                        //     regexp: /^[a-zA-Z0-9_]+$/,
                        //     message: '用户名只能包含大写、小写、数字和下划线'
                        // }
                    }
                },
                qq: {
                    message: 'QQ填写有误',
                    validators: {
                        notEmpty: {
                            message: 'QQ不能为空'
                        },
                        stringLength: {
                            min: 6,
                            max: 15,
                            message: '请输入正确的QQ号码'
                        },
                        numeric: {
                            message: 'QQ只能为数字'
                        }
                        // ,regexp: {
                        //     regexp: /^[a-zA-Z0-9_]+$/,
                        //     message: '用户名只能包含大写、小写、数字和下划线'
                        // }
                    }
                },
                gender: {
                    message: '性别填写有误',
                    validators: {
                        notEmpty: {
                            message: '性别不能为空'
                        }
                        // callback: {
                        //     message: '性别不能为空',
                        //     callback: function (value) {
                        //         return !!value;
                        //     }
                        //
                        // }
                    }

                },
                way: {
                    message: '参与方式填写有误',
                    validators: {
                        notEmpty: {
                            message: '请选择参与方式'
                        }
                        // callback: {
                        //     message: '性别不能为空',
                        //     callback: function (value) {
                        //         return !!value;
                        //     }
                        //
                        // }
                    }

                },
                passwd: {
                    message: '密码填写有误',
                    validators: {
                        notEmpty: {
                            message: '请填写密码'
                        },
                        stringLength: {
                            min: 8,
                            max: 12,
                            message: '密码长度限制在8-12位'
                        }
                        , regexp: {
                            regexp: /^[a-zA-Z0-9_@#￥%&*]+$/,
                            message: '密码只能包含大写、小写、数字、下划线和@#￥%&*'
                        }
                    }

                }


            }
        })
    }
);