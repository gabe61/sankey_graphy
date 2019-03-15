'use strict';

/**
 * Email builder module
 * Include this module in your project like another Angular module ['email.builder'] or you can rename it.
 */
angular.module('email.builder', [
    'ngRoute',
    angularDragula(angular),
    'pascalprecht.translate',
    'ui.tinymce',
    'ngSanitize',
    '720kb.tooltips',
    'ngAlertify'
])
    /**
     * You can upload custom images
     * This is a demo url, you can change with your own
     * At this url, will be send a POST request with 'upload' param, whem 'upload' is what you need to upload
     * You must return a status_code = 200 and put all information in 'data' like 'data.img_url', otherwise return status_txt with your error
     */
    .constant('variables', {
        urlToUploadImage: '//uploads.im/api',
        trackEvents: true, // You need to add google analytics in index.html
        includeMailchimp: {
            enable: true,
            mergeTagsInTinymce: true,
            mergeTagsInHead: true,
            includeStandardHeaderAndFooter: true
        }
    })

    /**
     * Basic TinyMCE configs
     * Change this if you really know what you do
     */
    .value('uiTinymceConfig', {
        baseUrl: 'bower_components/tinymce',
        format: 'raw'
    })

    /**
     * Custom directive to emulate Material Design for inputs
     * @example: <input type="text" md-input />
     */
    .directive('mdInput', [
        '$timeout',
        function($timeout) {
            return {
                restrict: 'A',
                scope: {
                    ngModel: '='
                },
                controller: function($scope, $element) {
                    var $elem = $($element);
                    $scope.updateInput = function() {
                        // clear wrapper classes
                        $elem.closest('.md-input-wrapper').removeClass('md-input-wrapper-danger md-input-wrapper-success md-input-wrapper-disabled');

                        if ($elem.hasClass('md-input-danger')) {
                            $elem.closest('.md-input-wrapper').addClass('md-input-wrapper-danger')
                        }
                        if ($elem.hasClass('md-input-success')) {
                            $elem.closest('.md-input-wrapper').addClass('md-input-wrapper-success')
                        }
                        if ($elem.prop('disabled')) {
                            $elem.closest('.md-input-wrapper').addClass('md-input-wrapper-disabled')
                        }
                        if ($elem.hasClass('label-fixed')) {
                            $elem.closest('.md-input-wrapper').addClass('md-input-filled')
                        }
                        if ($elem.val() != '') {
                            $elem.closest('.md-input-wrapper').addClass('md-input-filled')
                        }
                    };
                },
                link: function(scope, elem, attrs) {

                    var $elem = $(elem);

                    $timeout(function() {
                        if (!$elem.hasClass('md-input-processed')) {

                            if ($elem.prev('label').length) {
                                $elem.prev('label').addBack().wrapAll('<div class="md-input-wrapper"/>');
                            } else {
                                $elem.wrap('<div class="md-input-wrapper"/>');
                            }
                            $elem
                                .addClass('md-input-processed')
                                .closest('.md-input-wrapper')
                                .append('<span class="md-input-bar"/>');
                        }

                        scope.updateInput();

                    });

                    scope.$watch(function() {
                            return $elem.attr('class');
                        },
                        function(newValue, oldValue) {
                            if (newValue != oldValue) {
                                scope.updateInput();
                            }
                        }
                    );

                    scope.$watch(function() {
                            return $elem.val();
                        },
                        function(newValue, oldValue) {
                            if (!$elem.is(':focus') && (newValue != oldValue)) {
                                scope.updateInput();
                            }
                        }
                    );

                    $elem
                        .on('focus', function() {
                            $elem.closest('.md-input-wrapper').addClass('md-input-focus')
                        })
                        .on('blur', function() {
                            $timeout(function() {
                                $elem.closest('.md-input-wrapper').removeClass('md-input-focus');
                                if ($elem.val() == '') {
                                    $elem.closest('.md-input-wrapper').removeClass('md-input-filled')
                                } else {
                                    $elem.closest('.md-input-wrapper').addClass('md-input-filled')
                                }
                            }, 100)
                        });
                }
            }
        }
    ])
    /**
     * Custom directive to upload images
     * @example: <input type="file" input-file-upload />
     */
    .directive('inputFileUpload', [
        'utils',
        'variables',
        '$timeout',
        function(utils, variables, $timeout) {
            return {
                restrict: 'A',
                require: 'ngModel',
                link: function(scope, elem, attrs, ngModelCtrl) {
                    var wrapper, inputText;

                    $timeout(function() {
                        wrapper = $(elem).closest('.md-input-wrapper');
                        inputText = wrapper.children('input:text');

                        inputText.css('paddingRight', '35px');
                        wrapper.append('<button type="button" class="md-icon upload-icon">\n    <i class="material-icons">file_upload</i>\n    <input type="file" style=\'width:200px\'  onchange="angular.element(this).scope().inputFileChange(event)" name="file">\n</button>');
                    }, 100);

                    scope.inputFileChange = function(event) {

                        if (!variables.urlToUploadImage)
                            throw Error('You don\'t set the \'urlToUploadImage\' in variables.');

                        var inputFile = $(event.target),
                            icon = inputFile.prev('i.material-icons'),
                            oldIconText = icon.text();
                        icon.text('hdr_strong').addClass('icon-spin').css('opacity', '.7');
                        inputFile.prop('disabled', true);
                        var formData = new FormData();
                        formData.append('upload', event.target.files[0]);
                        return $.ajax({
                            url: variables.urlToUploadImage,
                            data: formData,
                            processData: false,
                            contentType: false,
                            type: 'POST',
                            success: function(res) {
                                if (res.status_code == 200) {
                                    event.target.value = null;
                                    ngModelCtrl.$setViewValue(res.data.img_url);
                                    inputText.val(res.data.img_url);
                                    utils.notify(utils.translate('your_image_has_been_uploaded')).log()
                                } else {
                                    utils.notify(res.status_txt).error()
                                }
                            },
                            error: function(err) {
                                utils.notify(err.statusText).error()
                            },
                            complete: function() {
                                inputFile.prop('disabled', false);
                                icon.text(oldIconText).removeClass('icon-spin').removeAttr('style');
                            }
                        });
                    }
                }
            }
        }
    ])

    /**
     * This is all filters what you need for this builder
     * You can change them, but be careful
     */
    .filter('arrToPadding', function() {
        return function(val) {
            var str = 0;
            val.forEach(function(p) {
                if (p) {
                    str += p + " ";
                } else {
                    str += 0 + " ";
                }
            });
            return str;
        };
    })
    .filter('hexToRgb', function() {
        return function(hex, opacity) {
            var h = hex.replace('#', '');
            h = h.match(new RegExp('(.{' + h.length / 3 + '})', 'g'));

            for (var i = 0; i < h.length; i++)
                h[i] = parseInt(h[i].length == 1 ? h[i] + h[i] : h[i], 16);

            if (typeof opacity != 'undefined') {
                opacity = opacity / 100;
                h.push(opacity);
            }
            return 'rgba(' + h.join(',') + ')';
        }
    })
    .filter('translateCamelCase', ['utils', function(utils) {
        return function(key_to_translate, additional_data) {
            if (typeof key_to_translate !== 'string') return key_to_translate;
            var snake_key = utils.camelToSnake(key_to_translate);
            var translated = utils.translate(snake_key, additional_data);
            return translated === snake_key ? key_to_translate : translated;
        }
    }])
    .filter('rawHtml', ['$sce', function($sce) {
        var div = document.createElement('div');
        return function(html, decode) {
            if (decode) {
                div.innerHTML = html;
                return $sce.trustAsHtml(div.textContent)
            }
            return $sce.trustAsHtml(html)
        };
    }])

    /**
     * All utils functions
     */
    .factory('utils', ['$filter', 'alertify', 'variables', function($filter, alertify, variables) {
        var self = this;
        self.utils = {
            /**
             * Translate key direct in module
             * @example: utils.translate(key_to_translate, additional_data)
             * @param key_to_translate
             * @param additional_data
             * @returns {*}
             */
            translate: function(key_to_translate, additional_data) {
                return $filter('translate')(key_to_translate, additional_data)
            },
            /**
             * Convert string from snake to camel
             * @param str
             * @returns {*}
             */
            snakeToCamel: function(str) {
                if (typeof str !== 'string')  return str;
                return str.replace(/_([a-z])/gi, function(m, w) {
                    return "" + w.toUpperCase();
                });
            },
            /**
             * Convert camel to snake
             * @param str
             * @returns {*}
             */
            camelToSnake: function(str) {
                if (typeof str !== 'string') return str;
                return str.replace(/([A-Z])/g, function(m, w) {
                    return "_" + w.toLowerCase();
                });
            },
            /**
             * Generate random id
             * @param prefix
             * @returns {string}
             */
            uid: function(prefix) {
                return (prefix || 'id') + (new Date().getTime()) + "RAND" + (Math.ceil(Math.random() * 100000));
            },
            /**
             * https://gist.github.com/aaronmccall/9751450
             * @param list
             * @param props
             * @returns {*}
             */
            findWhere: function(list, props) {
                var idx = 0;
                var len = list.length;
                var match = false;
                var item, item_k, item_v, prop_k, prop_val;
                for (; idx < len; idx++) {
                    item = list[idx];
                    for (prop_k in props) {
                        // If props doesn't own the property, skip it.
                        if (!props.hasOwnProperty(prop_k)) continue;
                        // If item doesn't have the property, no match;
                        if (!item.hasOwnProperty(prop_k)) {
                            match = false;
                            break;
                        }
                        if (props[prop_k] === item[prop_k]) {
                            // We have a match…so far.
                            match = true;
                        } else {
                            // No match.
                            match = false;
                            // Don't compare more properties.
                            break;
                        }
                    }
                    // We've iterated all of props' properties, and we still match!
                    // Return that item!
                    if (match) return item;
                }
                // No matches
                return null;
            },
            /**
             * Strip email html for unnecessary attributes, classes ...
             * @param html
             * @param email
             * @returns {string|*|Object|string|string}
             */
            stripTags: function(html, email) {
                email = email || {}; // I know, is ugly, but is supported in es5
                var el = document.createElement("html");

                $(el).html(self.utils.removeLineBreaks(html));

                $(el).find('body').css({
                    'background': email.emailSettings.options.backgroundColor,
                    'padding': email.emailSettings.options.paddingTop + ' 0 ' + email.emailSettings.options.paddingBottom
                });

                if (!$(el).find('head meta[http-equiv="Content-Type"]').length) {
                    $(el).find('head').append($('<meta/>', {
                        'http-equiv': 'Content-Type',
                        'content': 'text/html; charset=UTF-8'
                    }));
                    $(el).find('head').append("<meta name=\"viewport\" content=\"width=device-width\"><link href='https://fonts.googleapis.com/css?family=Raleway:300,400,500,600,700' rel='stylesheet' type='text/css'><style>@import url(https://fonts.googleapis.com/css?family=Raleway:300,400,500,600,700); html{width: 100%;}body{width: 100%; background-color: white; margin:0; padding:0;-webkit-font-smoothing: antialiased; mso-margin-top-alt:0px; mso-margin-bottom-alt:0px; mso-padding-alt: 0px 0px 0px 0px;}p,h1,h2,h3,h4{margin-top:0; margin-bottom:0; padding-top:0; padding-bottom:0;}table{font-size: 14px;border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;border: 0px;}span.preheader{display: none;font-size: 1px; visibility: hidden; opacity: 0; color: transparent; height: 0; width: 0;}@media only screen and (max-width: 600px){body{min-width:100% !important;}.container{width:450px !important; min-width:450px !important;}.container_2{width:450px !important; min-width:450px !important;}.container_3{height:180px !important;}.center{margin:0 auto 0 auto !important; padding-top: 20px;}.center_menu{margin:0 auto 0 auto !important; text-align:center !important;}.container_wrap{display:inline-block !important; width:450px !important; height:auto !important;}.container_wrap_2{display:block !important; width:450px !important; text-align:center !important; height:auto !important;}.container_wrap_margin{display:block !important; width:100% !important; height:10px !important;}.text{width:380px !important; text-align:center !important;}.title{width:450px !important;text-align:center !important;}.title_2{width:450px !important;border:none !important; text-align:center !important; padding-left:none !important;}.image_container_main a img{width:450px !important; height:auto !important}.image_container{width: 100% !important; height: auto !important;}.disable{display: none !important;}.enable{display: inline !important;}.bgnd{background-size:cover !important;}.padding_top{padding-top: 20px;}.padding_bottom{padding-bottom: 20px;}.height{height:400px !important;}}@media only screen and (max-width: 481px){body{min-width:100% !important;}.container{width:300px !important; min-width:300px !important;}.container_2{width:300px !important; min-width:300px !important;}.container_3{height:180px !important;}.center{margin:0 auto 0 auto !important;}.center_menu{margin:0 auto 0 auto !important;}.container_wrap{display:inline-block !important; width:300px !important; height:auto !important; border-radius:0 !important;}.container_wrap_2{display:block !important; width:300px !important; height:auto !important;}.container_wrap_margin{display:block !important; width:100% !important; height:10px !important;}.text{width:270px !important; text-align:center !important;}.title{text-align:center !important;width:300px !important;}.title_2{width:450px !important;border:none !important; text-align:center !important; padding-left:none !important;}.image_container_main a img{width:300px !important; height:auto !important;}.image_container{width: 100% !important; height: auto !important;}.disable{display: none !important;}.enable{display: inline !important;}.bgnd{background-size:cover !important;}.padding_top{padding-top: 20px;}.padding_bottom{padding-bottom: 20px;}.height{height:300px !important;}}</style>");
                }

                if (!$(el).find('head title').length) {
                    $(el).prepend('<title>' + email.name + '</title>')
                } else {
                    $(el).find('head title').text(email.name)
                }

                if (email.mailchimpHead && variables.includeMailchimp.enable && variables.includeMailchimp.mergeTagsInHead) {
                    if (!$(el).find('head meta[property="og:title"]').length) {
                        $(el).find('head').append($('<meta/>', {
                            'property': 'og:title',
                            'content': '*|MC:SUBJECT|*'
                        }));
                    }
                } else if (!email.mailchimpHead || !variables.includeMailchimp.enable || !variables.includeMailchimp.mergeTagsInHead) {
                    $(el).find('head meta[property="og:title"]').remove();
                }

                if (email.mailchimpHeaderFooter && variables.includeMailchimp.enable && variables.includeMailchimp.includeStandardHeaderAndFooter) {
                    $(el).find('table[data-type]:first').prepend("<tr id=\"templatePreheader\">\n    <td valign=\"top\" class=\"preheaderContent\">\n\n        <!-- // Begin Module: Standard Preheader \\\\ -->\n        <table border=\"0\" cellpadding=\"10\" cellspacing=\"0\" width=\"100%\">\n            <tr>\n                <td valign=\"top\">\n                    <div mc:edit=\"std_preheader_content\">\n                        Use one or two sentences in this area to offer a teaser of your email\'s content. Text here will show in a preview area in some email clients.\n                    </div>\n                </td>\n                <td valign=\"top\" width=\"180\">\n                    <div mc:edit=\"std_preheader_links\">\n                        <!-- *|IFNOT:ARCHIVE_PAGE|* -->Is this email not displaying correctly?<br><a href=\"*|ARCHIVE|*\" target=\"_blank\">View it in your browser</a>.<!-- *|END:IF|* -->\n                    </div>\n                </td>\n            </tr>\n        </table>\n        <!-- // End Module: Standard Preheader \\\\ -->\n\n    </td>\n</tr>")
                    $(el).find('table[data-type]:last').append("<tr id=\"templateFooter\">\n    <td valign=\"top\" class=\"footerContent\">\n\n        <!-- // Begin Module: Standard Footer \\\\ -->\n        <table border=\"0\" cellpadding=\"10\" cellspacing=\"0\" width=\"100%\">\n            <tr>\n                <td colspan=\"2\" valign=\"middle\" id=\"social\">\n                    <div mc:edit=\"std_social\">\n                        &nbsp;<a href=\"*|TWITTER:PROFILEURL|*\">follow on Twitter</a> | <a href=\"*|FACEBOOK:PROFILEURL|*\">friend on Facebook</a> | <a href=\"*|FORWARD|*\">forward to a friend</a>&nbsp;\n                    </div>\n                </td>\n            </tr>\n            <tr>\n                <td valign=\"top\" width=\"370\">\n                    <br>\n                    <div mc:edit=\"std_footer\">\n                        *|IF:LIST|*\n                        <em>Copyright &copy; *|CURRENT_YEAR|* *|LIST:COMPANY|*, All rights reserved.</em>\n                        <br>\n                        <!-- *|IFNOT:ARCHIVE_PAGE|* -->\n                        *|LIST:DESCRIPTION|*\n                        <br>\n                        <strong>Our mailing address is:</strong>\n                        <br>\n                        *|HTML:LIST_ADDRESS_HTML|*\n                        <br>\n                        <!-- *|END:IF|* -->\n                        *|ELSE:|*\n                        <!-- *|IFNOT:ARCHIVE_PAGE|* -->\n                        <em>Copyright &copy; *|CURRENT_YEAR|* *|USER:COMPANY|*, All rights reserved.</em>\n                        <br>\n                        <strong>Our mailing address is:</strong>\n                        <br>\n                        *|USER:ADDRESS_HTML|*\n                        <!-- *|END:IF|* -->\n                        *|END:IF|*\n                    </div>\n                    <br>\n                </td>\n                <td valign=\"top\" width=\"170\" id=\"monkeyRewards\">\n                    <br>\n                    <div mc:edit=\"monkeyrewards\">\n                        *|IF:REWARDS|* *|HTML:REWARDS|* *|END:IF|*\n                    </div>\n                    <br>\n                </td>\n            </tr>\n            <tr>\n                <td colspan=\"2\" valign=\"middle\" id=\"utility\">\n                    <div mc:edit=\"std_utility\">\n                        &nbsp;<a href=\"*|UNSUB|*\">unsubscribe from this list</a> | <a href=\"*|UPDATE_PROFILE|*\">update subscription preferences</a><!-- *|IFNOT:ARCHIVE_PAGE|* --> | <a href=\"*|ARCHIVE|*\">view email in browser</a><!-- *|END:IF|* -->&nbsp;\n                    </div>\n                </td>\n            </tr>\n        </table>\n        <!-- // End Module: Standard Footer \\\\ -->\n\n    </td>\n</tr>")
                } else if (!email.mailchimpHeaderFooter || !variables.includeMailchimp.enable || !variables.includeMailchimp.includeStandardHeaderAndFooter) {
                    $(el).find('table').find('#templateFooter, #templatePreheader').remove()
                }

                $(el).find('i.actions').each(function() {
                    $(this).remove();
                });
                $(el).find('ng-include, div.builder-element, [ng-bind-html]').each(function() {
                    $(this).replaceWith($(this).contents());
                });
                $(el).contents().contents().addBack().filter(function() {
                    return this.nodeType == Node.COMMENT_NODE;
                }).remove();
                return $(el)[0].outerHTML;
            },
            /**
             * Notify
             * @param msg
             * @param callback
             * @returns {{log: utils.log, success: utils.success, error: utils.error}}
             */
            notify: function(msg, callback) {
                return {
                    log: function() {
                        return alertify.log(msg, callback)
                    },
                    success: function() {
                        alertify.success(msg, callback)
                    },
                    error: function() {
                        alertify.error(msg, callback)
                    }
                }
            },
            /**
             * Confirm dialog
             * @param msg
             * @param succesFn
             * @param cancelFn
             * @param okBtn
             * @param cancelBtn
             * @returns {IAlertify}
             */
            confirm: function(msg, succesFn, cancelFn, okBtn, cancelBtn) {
                return alertify
                    .okBtn(okBtn)
                    .cancelBtn(cancelBtn)
                    .confirm(msg, succesFn, cancelFn)
            },
            /**
             * Alert dialog
             * @param msg
             * @returns {IAlertify}
             */
            alert: function(msg) {
                return alertify
                    .okBtn("Accept")
                    .alert(msg)
            },
            /**
             * Prompt dialog
             * @param defaultvalue
             * @param promptMessage
             * @param successFn
             * @param cancelFn
             * @returns {IAlertify}
             */
            prompt: function(defaultvalue, promptMessage, successFn, cancelFn) {
                return alertify
                    .defaultValue(defaultvalue)
                    .prompt(promptMessage, successFn, cancelFn)
            },
            /**
             * Validate email before save and import
             * @param emailToValidate
             * @returns {boolean}
             */
            validateEmail: function(emailToValidate) {
                return angular.isObject(emailToValidate) &&
                    emailToValidate.hasOwnProperty('name') &&
                    angular.isArray(emailToValidate.elements) &&
                    angular.isString(emailToValidate.html) &&
                    angular.isObject(emailToValidate.emailSettings) &&
                    emailToValidate.emailSettings.type == 'emailSettings' &&
                    angular.isObject(emailToValidate.emailSettings.options)
            },
            /**
             * Track events with Google Analytics
             * @param category
             * @param event
             * @param name
             * @returns {*}
             */
            trackEvent: function(category, event, name) {
                if (variables.trackEvents) {
                    if (!window.ga)
                        return console.error('To track events, include Google analytics code in index.html');
                    return ga('send', 'event', category, event, name);
                }
            },
            removeLineBreaks: function(html) {
                return html.replace(/\n\s*\n/gi, '\n');
            }
        };
        return self.utils;
    }])
    /**
     * Storage
     */
    .factory('storage', ['utils', function(utils) {
        'use strict';

        var STORAGE_ID = 'Email';

        return {
            /**
             * Get Email from localStorage
             */
            get: function() {
                return new Promise(function(resolve, reject) {
                    try {
                        var email = JSON.parse(localStorage.getItem(STORAGE_ID)) || {
                            name: 'New Email',
                            elements: [],
                            html: '',
                            emailSettings: {
                                options: {
                                    paddingTop: "50px",
                                    paddingBottom: "50px",
                                    backgroundColor: "#cccccc"
                                },
                                type: 'emailSettings'
                            }
                        };
                        resolve(email)
                    } catch (e) {
                        utils.notify(e).error();
                        reject(e)
                    }
                });
            },

            /**
             * Put changed data in Email
             * Emulate server storage with Promise
             * @param email
             * @returns {Promise}
             */
            put: function(email) {
                return new Promise(function(resolve, reject) {
                    try {
                        // Remove multine breaks
                        email.html = utils.removeLineBreaks(email.html);
                        localStorage.setItem(STORAGE_ID, JSON.stringify(email));
                        resolve()
                    } catch (e) {
                        utils.notify(e).error();
                        reject(e)
                    }
                })
            }
        };
    }])

    /**
     * Module configurations
     */
    .config(['$routeProvider', '$translateProvider', '$translatePartialLoaderProvider', '$sceDelegateProvider', 'tooltipsConfProvider', function($routeProvider, $translateProvider, $translatePartialLoaderProvider, $sceDelegateProvider, tooltipsConfProvider) {
        $sceDelegateProvider.resourceUrlWhitelist([
            'self'
        ]);

        /**
         * Change '/' with your email builder route
         * Be careful at 'templateUrl' location
         */
        $routeProvider.when('/', {
            templateUrl: 'builder/builder.html',
            controller: 'emailCtrl'
        });

        /**
         * Tanslate configurations
         * Change 'urlTemplate' if you have another location for translations
         */
        $translatePartialLoaderProvider.addPart('builder');
        $translateProvider.useLoader('$translatePartialLoader', {
            urlTemplate: '/i18n/{part}/{lang}.json'
        });
        $translateProvider.preferredLanguage('en');
        $translateProvider.useSanitizeValueStrategy('sanitize');
        $translateProvider.fallbackLanguage('en');
        $translateProvider.useSanitizeValueStrategy('escape');

        /**
         * Tooltip configurations
         */
        tooltipsConfProvider.configure({
            smart: true,
            size: 'small'
        });
    }])

    /**
     * Cache all email blocks template, to load very fast
     * Be very careful if you want to change them
     */
    .run(['$templateCache', function($templateCache) {
        $templateCache.put('titleTemplate', '<table mc:repeatable="layout" mc:hideable="" mc:variant="section_3" width="100%" align="center" cellpadding="0" cellspacing="0" border="0"  data-bgcolor="s3_bg" style=" display: table;max-width:800px; background-color: {{element.options.backgroundColor}}" data-type="title">\n    <tbody>\n    <tr>\n        <td align="{{ element.options.align }}" class="title" style="padding:{{ element.options.padding | arrToPadding  }}; color: #757575;" data-block-id="background">\n            <h1 style="width:auto; font-family: Arial, sans-serif; padding-top: 30px; font-weight: 500; color: {{element.options.color}}; line-height: 42px; font-size: 36px;" data-block-id="main-title">{{ element.options.title }}</h1>\n            <h4 style="font-family: Arial, sans-serif; font-weight: 500; color: {{element.options.color}}; line-height: 22px; font-size: 16px;" data-block-id="sub-title">{{ element.options.subTitle }}</h4>\n        </td>\n    </tr>\n    </tbody>\n</table>');
        $templateCache.put('buttonTemplate', '<table  mc:repeatable="layout" mc:hideable="" mc:variant="section_3" width="100%" align="center" cellpadding="0" cellspacing="0" border="0"  data-bgcolor="s3_bg" style="table-layout:fixed;margin:0 auto; border-collapse:collapse; border: 0px; max-width:800px;background-color:{{element.options.backgroundColor}}"  data-type="button">\n    <tbody>\n    <tr>\n        <td style="padding: {{ element.options.padding | arrToPadding  }};" class="buttons-full-width">\n            <table width="" cellspacing="0" cellpadding="0" border="0" align="{{ element.options.align }}" class="button">\n                <tbody>\n                <tr>\n                    <td style="margin: 10px 10px 10px 10px;" class="button">\n                        <a style="background-color: {{element.options.buttonBackgroundColor}};color: #FFFFFF;font-family: Arial;font-size: 15px;line-height:21px;display: inline-block;border-radius: 6px;text-align: center;text-decoration: none;font-weight: bold;display: block;margin: 0px 0px; padding: 12px 20px;" class="button-1" href="{{ element.options.url }}" data-default="1">{{ element.options.buttonText }}</a>                   <!--[if mso]>             </center>           </v:roundrect>         <![endif]-->\n                    </td>\n                </tr>\n                </tbody>\n            </table>\n        </td>\n    </tr>\n    </tbody>\n</table>');
        $templateCache.put('textTemplate', '<table mc:repeatable="layout" mc:hideable="" mc:variant="section_3" width="100%" align="center" cellpadding="0" cellspacing="0" border="0"  data-bgcolor="s3_bg" style="max-width:800px;display: table; background-color:  {{element.options.backgroundColor}}" align="center" data-type="text-block">\n    <tbody>\n    <tr>\n        <td data-block-id="background" data-clonable="true" align="left" style="padding:{{ element.options.padding | arrToPadding  }}; text-decoration: none; font-family: \'Raleway\', Open Sans, sans-serif; font-size: 14px; line-height:21px; color:#696969; text-align: center; font-weight:400;"\n            data-ng-bind-html="element.options.text | rawHtml">\n        </td>\n    </tr>\n    </tbody>\n</table>');
        $templateCache.put('unsubscribeTemplate', '<table mc:repeatable="layout" mc:hideable="" mc:variant="section_3" width="100%" align="center" cellpadding="0" cellspacing="0" border="0"  data-bgcolor="s3_bg" style="max-width:800px;display: table; background-color: {{element.options.backgroundColor}};" align="center" data-type="text-block">\n    <tbody>\n    <tr>\n        <td class="block-text selected-item" data-block-id="background" data-clonable="true" align="left" style="padding:{{ element.options.padding | arrToPadding  }};text-decoration: none; font-family: \'Raleway\', Open Sans, sans-serif; font-size: 14px; line-height:21px; color:#696969; text-align: center; font-weight:400; line-height: 22px;"\n            data-ng-bind-html="element.options.text | rawHtml">\n        </td>\n    </tr>\n    </tbody>\n</table>');
        $templateCache.put('dividerTemplate', '<table class="main" mc:repeatable="layout" mc:hideable="" mc:variant="section_3" width="100%" align="center" cellpadding="0" cellspacing="0" border="0"  data-bgcolor="s3_bg" style="max-width:800px;border: 0; display: table; background-color: {{element.options.backgroundColor}};" cellspacing="0" cellpadding="0" border="0" align="center" data-type="divider">\n    <tbody>\n    <tr>\n        <td class="divider-simple" style="padding: {{ element.options.padding | arrToPadding  }};">\n            <table width="100%" cellspacing="0" cellpadding="0" border="0" style="border-top: 1px solid #DADFE1;">\n                <tbody>\n                <tr>\n                    <td width="100%" height="15px"></td>\n                </tr>\n                </tbody>\n            </table>\n        </td>\n    </tr>\n    </tbody>\n</table>');
        $templateCache.put('imageTemplate', '<table mc:repeatable="layout" mc:hideable="" mc:variant="section_3" width="100%" align="center" cellpadding="0" cellspacing="0" border="0"  data-bgcolor="s3_bg" style="max-width:800px;display: table; background-color: {{element.options.backgroundColor}};" data-type="image">\n    <tbody>\n    <tr>\n        <td align="{{ element.options.align }}" style="padding: {{ element.options.padding | arrToPadding  }};" class="image">\n            <img class="resizable" border="0" align="one_image" style="display:block;max-width:100%;" width="{{element.options.width}}" alt="" src="{{ element.options.image }}" tabindex="0">\n        </td>\n    </tr>\n    </tbody>\n</table>');
        $templateCache.put('imageTextInsideTemplate', '<table width="100%" cellspacing="0" cellpadding="0" border="0" bgcolor="#FFFFFF" align="center"\n       style="max-width:800px;display: table; background-color: {{element.options.backgroundColor}};" data-type="imageTextInside">\n    <tbody>\n    <tr>\n        <td class="image-text" align="left"\n            style="padding: {{ element.options.padding | arrToPadding  }}; font-family: Arial; font-size: 13px; color: #000000; line-height: 22px;">\n            <table class="image-in-table" width="190" align="left" style="padding:5px 5px 5px 0; margin: 11px 0;">\n                <tbody>\n                <tr>\n                    <td max-width="160">\n                        <img border="0" class="resizable" align="left"\n                             src="{{ element.options.image }}"\n                             width="{{ element.options.width }}"\n                             style="display: block;margin: 0px;max-width: 540px;padding:0 10px 10px 0;">\n                    </td>\n                </tr>\n                <tr>\n                </tr>\n                </tbody>\n            </table>\n            <ng-bind-html ng-bind-html="element.options.text | rawHtml"></ng-bind-html>\n        </td>\n    </tr>\n    </tbody>\n</table>');
        //$templateCache.put('imageTextRightTemplate', '<table width="100%" cellspacing="0" cellpadding="0" border="0" bgcolor="#FFFFFF" align="center"\n       style="max-width:800px;display: table; background-color: {{element.options.backgroundColor}};" data-type="imageTextRight">\n    <tbody>\n    <tr>\n        <td class="image-text" align="left"\n            style="padding: {{ element.options.padding | arrToPadding  }}; font-family: Arial; font-size: 13px; color: #000000; line-height: 22px;">\n            <table class="image-in-table" width="190" align="left" style="margin: 11px 0;">\n                <tbody>\n                <tr>\n                    <td class="gap" width="30"></td>\n                    <td width="160">\n                        <img border="0" align="left"\n                             src="{{ element.options.image }}"\n                             width="{{ element.options.width }}"\n                             style="display: block;margin: 0px;max-width: 340px;padding:5px 5px 0 0;">\n                    </td>\n                </tr>\n                </tbody>\n            </table>\n\n            <table width="190">\n                <tbody>\n                <tr>\n                    <td class="text-block" data-ng-bind-html="element.options.text | rawHtml">\n                    </td>\n                </tr>\n                </tbody>\n            </table>\n        </td>\n    </tr>\n    </tbody>\n</table>');
        $templateCache.put('imageTextRightTemplate', '<table mc:repeatable="layout" mc:hideable="" mc:variant="section_4" width="100%" align="center" cellpadding="0" cellspacing="0" border="0" bgcolor="#eeeeee" data-bgcolor="s4_bg" style="max-width:800px;table-layout:fixed;margin:0 auto; border-collapse:collapse; border: 0px; max-width:800px;background-color:{{element.options.backgroundColor}}" data-module="section_4" data-thumb="thumbnails/s4.png"> <tbody> <tr> <td align="center" style="padding: {{ element.options.padding | arrToPadding  }};min-width:100%;margin:0 auto; background: url(img/s4_bg.jpg) center center / cover no-repeat;" data-bg="s4_bg_img"> <table width="600" align="center" class="container" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td height="40" width="1" style="font-size: 1px; line-height: 40px; height:40px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr></tbody> </table> <table width="600" align="center" cellpadding="0" cellspacing="0" border="0" class="container" style="table-layout:fixed; margin:0 auto; border-collapse:collapse; border: 0px;"> <tbody> <tr> <td align="center" class="container"> <table width="600" align="center" cellpadding="0" cellspacing="0" border="0" class="container" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td class="container"> <table width="600" align="center" cellpadding="0" cellspacing="0" border="0" class="container" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td align="center"> <table width="100%" align="center" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td> <table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <th align="left" class="container_wrap" style="display:inline;"> <table align="left" width="280" class="container" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;border: 0px;"> <tbody> <tr> <td> <table width="280" align="left" class="container_wrap" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;border: 0px;"> <tbody> <tr> <td class="image_container_main"> <img mc:edit="" class="resizable" src="{{element.options.image}}" width="{{element.options.width}}" height="156" alt="img">  </td></tr></tbody> </table> </td></tr></tbody> </table> </th> <th align="left" class="container_wrap" style="display:inline;" data-ng-bind-html="element.options.text | rawHtml"> </th> </tr></tbody> </table> </td></tr></tbody> </table> </td></tr><tr> <td height="40" width="1" style="font-size: 1px; line-height: 40px; height:40px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr></tbody> </table> </td></tr></tbody> </table> </td></tr></tbody> </table> </td></tr></tbody></table>');
        $templateCache.put('imageTextLeftTemplate', '<table mc:repeatable="layout" mc:hideable="" mc:variant="section_4" width="100%" align="center" cellpadding="0" cellspacing="0" border="0" bgcolor="#eeeeee" data-bgcolor="s4_bg" style="max-width:800px;table-layout:fixed;margin:0 auto; border-collapse:collapse; border: 0px; max-width:800px;background-color:{{element.options.backgroundColor}}" data-module="section_4" data-thumb="thumbnails/s4.png"> <tbody> <tr> <td align="center" style="padding: {{ element.options.padding | arrToPadding  }};min-width:100%;margin:0 auto; background: url(img/s4_bg.jpg) center center / cover no-repeat;" data-bg="s4_bg_img"> <table width="600" align="center" class="container" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td height="40" width="1" style="font-size: 1px; line-height: 40px; height:40px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr></tbody> </table> <table width="600" align="center" cellpadding="0" cellspacing="0" border="0" class="container" style="table-layout:fixed; margin:0 auto; border-collapse:collapse; border: 0px;"> <tbody> <tr> <td align="center" class="container"> <table width="600" align="center" cellpadding="0" cellspacing="0" border="0" class="container" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td class="container"> <table width="600" align="center" cellpadding="0" cellspacing="0" border="0" class="container" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td align="center"> <table width="100%" align="center" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td> <table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <th align="right" class="container_wrap" style="display:inline;"> <table align="right" width="280" class="container" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;border: 0px;"> <tbody> <tr> <td> <table width="280" align="left" class="container_wrap" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;border: 0px;"> <tbody> <tr> <td class="image_container_main"> <img mc:edit="" class="resizable" src="{{element.options.image}}" width="{{element.options.width}}" height="156" alt="img">  </td></tr></tbody> </table> </td></tr></tbody> </table> </th> <th align="left" class="container_wrap" style="display:inline;" data-ng-bind-html="element.options.text | rawHtml"> </th> </tr></tbody> </table> </td></tr></tbody> </table> </td></tr><tr> <td height="40" width="1" style="font-size: 1px; line-height: 40px; height:40px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr></tbody> </table> </td></tr></tbody> </table> </td></tr></tbody> </table> </td></tr></tbody></table>');
        $templateCache.put('imageText2x2Template', '<table mc:repeatable="layout" mc:hideable="" mc:variant="section_3" width="100%" align="center" cellpadding="0" cellspacing="0" border="0"  data-bgcolor="s3_bg" style="max-width:800px;table-layout:fixed;margin:0 auto; border-collapse:collapse; border: 0px; max-width:800px;background-color:{{element.options.backgroundColor}}" data-module="section_3" data-thumb="thumbnails/s3.png"> <tbody> <tr> <td align="center" style="padding: {{ element.options.padding | arrToPadding  }};min-width:100%;margin:0 auto; background-color:{{element.options.backgroundColor}}) center center / cover no-repeat;" data-bg="s3_bg_img"> <table width="600" align="center" class="container" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td height="60" width="1" style="font-size: 1px; line-height: 60px; height:60px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr></tbody> </table> <table width="600" align="center" cellpadding="0" cellspacing="0" border="0" class="container" style="table-layout:fixed; margin:0 auto; border-collapse:collapse; border: 0px;"> <tbody> <tr> <td align="center" class="container"> <table width="600" align="center" cellpadding="0" cellspacing="0" border="0" class="container" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td class="container"> <table width="600" align="center" cellpadding="0" cellspacing="0" border="0" class="container" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td align="center"> <table width="100%" align="center" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td> <table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <th align="left" width="180" class="container_wrap" valign="top" style="margin:0; padding:0;vertical-align:top;"> <table class="container" width="180" align="left" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td align="center"> <img mc:edit="" class="resizable" src="{{element.options.image1}}" border="0" alt="img" width="{{element.options.width1}}" style="display: block;"> </td></tr><tr> <td height="20" width="1" style="font-size: 1px; line-height: 20px; height:20px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr><tr> <td valign="top" class="image-caption-content text " data-ng-bind-html="element.options.text1 | rawHtml" align="center">  </td></tr></tbody> </table> </th> <th align="center" width="180" class="container_wrap" valign="top" style="margin:0; padding:0;vertical-align:top;"> <table class="container" width="180" align="center" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td align="center"> <img mc:edit="" class="resizable" src="{{element.options.image2}}" border="0" alt="img" width="{{element.options.width2}}" style="display: block;"> </td></tr><tr> <td height="20" width="1" style="font-size: 1px; line-height: 20px; height:20px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr><tr> <td valign="top" class="image-caption-content text " data-ng-bind-html="element.options.text2 | rawHtml" align="center">  </td></tr></tbody> </table> </th> </tr></tbody> </table> </td></tr></tbody> </table> </td></tr><tr> <td height="40" width="1" style="font-size: 1px; line-height: 40px; height:40px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr></tbody> </table> </td></tr></tbody> </table> </td></tr></tbody> </table> </td></tr></tbody></table>');
       // $templateCache.put('imageText3x2Template', '<table width="640" cellspacing="0" cellpadding="0" border="0" bgcolor="#FFFFFF" align="center"\n       style="max-width:800px;display: table; background-color: {{element.options.backgroundColor}};" data-type="imageText3x2">\n    <tbody>\n    <tr>\n        <td class="image-caption" style="padding: {{ element.options.padding | arrToPadding  }};">\n            <table class="image-caption-container" align="left" border="0" cellpadding="0" cellspacing="0"\n                   width="350">\n                <tbody>\n                <tr>\n                    <td>\n                        <table class="image-caption-column" align="left" border="0" cellpadding="0"\n                               cellspacing="0" width="160">\n                            <tbody>\n                            <tr>\n                                <td height="15" width="100%"></td>\n                            </tr>\n                            <tr>\n                                <td class="image-caption-content image"\n                                    style="font-family: Arial; font-size: 13px; color: #000000;">\n                                    <img src="{{ element.options.image1 }}"\n                                         width="{{ element.options.width1 }}"\n                                         alt="" style="display: block;" align="2" border="0">\n                                </td>\n                            </tr>\n                            <tr>\n                                <td height="15" width="100%"></td>\n                            </tr>\n                            <tr>\n                                <td class="image-caption-content text"\n                                    style="font-family: Arial; font-size: 13px; color: #000000; line-height: 22px;"\n                                    align="left"\n                                    data-ng-bind-html="element.options.text1 | rawHtml">\n                                </td>\n                            </tr>\n                            <tr>\n                                <td class="image-caption-bottom-gap" height="5" width="100%"></td>\n                            </tr>\n                            </tbody>\n                        </table>\n                        <table class="image-caption-column" align="right" border="0" cellpadding="0"\n                               cellspacing="0" width="160">\n                            <tbody>\n                            <tr>\n                                <td class="image-caption-top-gap" height="15" width="100%"></td>\n                            </tr>\n                            <tr>\n                                <td class="image-caption-content image"\n                                    style="font-family: Arial; font-size: 13px; color: #000000;">\n                                    <img src="{{ element.options.image2 }}"\n                                         width="{{ element.options.width2 }}"\n                                         alt="" style="display: block;" align="2" border="0">\n                                </td>\n                            </tr>\n                            <tr>\n                                <td height="15" width="100%"></td>\n                            </tr>\n                            <tr>\n                                <td class="image-caption-content text"\n                                    style="font-family: Arial; font-size: 13px; color: #000000; line-height: 22px;"\n                                    align="left"\n                                    data-ng-bind-html="element.options.text2 | rawHtml">\n                                </td>\n                            </tr>\n                            <tr>\n                                <td class="image-caption-bottom-gap" height="5" width="100%"></td>\n                            </tr>\n                            </tbody>\n                        </table>\n                    </td>\n                </tr>\n                </tbody>\n            </table>\n            <table class="image-caption-column" align="right" border="0" cellpadding="0" cellspacing="0"\n                   width="160">\n                <tbody>\n                <tr>\n                    <td class="image-caption-top-gap" height="15" width="100%"></td>\n                </tr>\n                <tr>\n                    <td class="image-caption-content image"\n                        style="font-family: Arial; font-size: 13px; color: #000000;">\n                        <img src="{{ element.options.image3 }}"\n                             width="{{ element.options.width3 }}"\n                             alt="" style="display: block;" align="2" border="0">\n                    </td>\n                </tr>\n                <tr>\n                    <td height="15" width="100%"></td>\n                </tr>\n                <tr>\n                    <td class="image-caption-content text"\n                        style="font-family: Arial; font-size: 13px; color: #000000; line-height: 22px;"\n                        align="left"\n                        data-ng-bind-html="element.options.text3 | rawHtml">\n                    </td>\n                </tr>\n                <tr>\n                    <td height="5" width="100%"></td>\n                </tr>\n                </tbody>\n            </table>\n        </td>\n    </tr>\n    </tbody>\n</table>');
        $templateCache.put('imageText3x2Template','<table mc:repeatable="layout" mc:hideable="" mc:variant="section_3" width="100%" align="center" cellpadding="0" cellspacing="0" border="0"  data-bgcolor="s3_bg" style="max-width:800px;table-layout:fixed;margin:0 auto; border-collapse:collapse; border: 0px; max-width:800px;background-color:{{element.options.backgroundColor}}" data-module="section_3" data-thumb="thumbnails/s3.png"> <tbody> <tr> <td align="center" style="padding: {{ element.options.padding | arrToPadding  }};min-width:100%;margin:0 auto; background-color:{{element.options.backgroundColor}}) center center / cover no-repeat;" data-bg="s3_bg_img"> <table width="600" align="center" class="container" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td height="60" width="1" style="font-size: 1px; line-height: 60px; height:60px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr></tbody> </table> <table width="600" align="center" cellpadding="0" cellspacing="0" border="0" class="container" style="table-layout:fixed; margin:0 auto; border-collapse:collapse; border: 0px;"> <tbody> <tr> <td align="center" class="container"> <table width="600" align="center" cellpadding="0" cellspacing="0" border="0" class="container" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td class="container"> <table width="600" align="center" cellpadding="0" cellspacing="0" border="0" class="container" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td align="center"> <table width="100%" align="center" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td> <table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <th align="left" width="180" class="container_wrap" valign="top" style="margin:0; padding:0;vertical-align:top;"> <table class="container" width="180" align="left" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td align="center"> <img mc:edit="" class="resizable" src="{{element.options.image1}}" border="0" alt="img" width="{{element.options.width1}}" style="display: block;"> </td></tr><tr> <td height="20" width="1" style="font-size: 1px; line-height: 20px; height:20px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr><tr> <td valign="top" class="image-caption-content text " data-ng-bind-html="element.options.text1 | rawHtml" align="center">  </td></tr></tbody> </table> </th> <th align="center" width="180" class="container_wrap" valign="top" style="margin:0; padding:0;vertical-align:top;"> <table class="container" width="180" align="center" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td align="center"> <img mc:edit="" class="resizable" src="{{element.options.image2}}" border="0" alt="img" width="{{element.options.width2}}" style="display: block;"> </td></tr><tr> <td height="20" width="1" style="font-size: 1px; line-height: 20px; height:20px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr><tr> <td valign="top" class="image-caption-content text " data-ng-bind-html="element.options.text2 | rawHtml" align="center">  </td></tr></tbody> </table> </th> <th align="right" width="180" class="container_wrap" valign="top" style="margin:0; padding:0;vertical-align:top;"> <table class="container" width="180" align="right" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td align="center"> <img mc:edit=""     class="resizable" src="{{element.options.image3}}" border="0" alt="img" width="{{element.options.width3}}" style="display: block;"> </td></tr><tr> <td height="20" width="1" style="font-size: 1px; line-height: 20px; height:20px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr><tr> <td valign="top" class="image-caption-content text " data-ng-bind-html="element.options.text3 | rawHtml" align="center"> </td></tr></tbody> </table> </th> </tr></tbody> </table> </td></tr></tbody> </table> </td></tr><tr> <td height="40" width="1" style="font-size: 1px; line-height: 40px; height:40px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr></tbody> </table> </td></tr></tbody> </table> </td></tr></tbody> </table> </td></tr></tbody></table>');

        }])

    .controller('emailCtrl', ['$scope', 'utils', 'storage', 'dragulaService', '$interpolate', '$translate', '$templateCache', 'variables',
        function($scope, utils, storage, dragulaService, $interpolate, $translate, $templateCache, variables) {
            /**
             * Sync with store
             */
            storage.get().then(function(email) {
                if(localStorage.getItem("filename")){
                    //console.log("File Path"+localStorage.getItem("filename"));
                    var filepath=localStorage.getItem("filename");
                    localStorage.removeItem("filename");
                    $.ajax({type:"POST", url: "backend/templates.php", data:{"operation":"viewtemplatedata","args":{"filepath":filepath}} ,
                        success: function(response)
                        {
                         $scope.Email=JSON.parse(response.replace("'", "\'"));
                         //console.log(JSON.stringify($scope.Email));
                         $scope.$digest();
                        }
                      });
               }
               else{
                   $scope.Email=email;
               }
                //$scope.Email = email;
                //$scope.Email=JSON.parse(JSON.stringify({"name":"New Email","elements":[{"type":"imageTextLeft","options":{"padding":["15px","50px","15px","50px"],"image":"assets/340x145.jpg","width":"320","backgroundColor":"#c0c0c0","text":"<table align=\"left\" width=\"280\" class=\"container\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;border: 0px;\"> <tbody> <tr> <td> <table width=\"280\" align=\"left\" class=\"container_wrap\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;border: 0px;\"> <tbody> <tr> <th align=\"right\" width=\"280\" class=\"container_wrap\"> <table align=\"right\" class=\"container\" width=\"280\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;border: 0px;\"> <tbody> <tr> <td height=\"20\" width=\"20\" style=\"font-size: 1px; line-height: 20px; height:15px;\">&nbsp;<img src=\"https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png\" alt=\"spacer\" width=\"1\" height=\"1\"></td></tr><tr> <td class=\"text\" align=\"left\" style=\"font-family: \'Raleway\', sans-serif; font-weight:700; font-size:24px; line-height:20px; color:#414141; text-align:left;padding:{{element.options.padding | arrToPadding}}\" data-size=\"s4_title_size\" data-min=\"12\" data-max=\"36\" data-color=\"s4_title_color\" mc:edit=\"s4_title_1\" >What We Are </td></tr><tr> <td height=\"10\" width=\"1\" style=\"font-size: 1px; line-height: 10px; height:10px;\">&nbsp;<img src=\"https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png\" alt=\"spacer\" width=\"1\" height=\"1\"></td></tr><tr> <td class=\"text\" align=\"left\" style=\"font-family: \'Open Sans\', sans-serif; font-weight:400; font-size:14px; line-height:24px; color:#696969; text-align:left;\" data-size=\"s4_text_size\" data-min=\"12\" data-max=\"36\" data-color=\"s4_text_color\" mc:edit=\"s4_text_1\">Sed ut perspiciatis unde omnis iste natt&shy;usistis error sit voluptatem accusantium doloremque laudantium, totam rem. </td></tr><tr> <td height=\"40\" width=\"1\" style=\"font-size: 1px; line-height: 40px; height:40px;\">&nbsp;<img src=\"https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png\" alt=\"spacer\" width=\"1\" height=\"1\"></td></tr></tbody> </table> </th> </tr></tbody> </table> </td></tr></tbody> </table>"},"id":"id1486808029170RAND45678"},{"type":"imageText3x2","options":{"padding":["15px","50px","15px","50px"],"image1":"http://localhost:8000/assets/154x160.jpg","image2":"http://localhost:8000/assets/154x160.jpg","image3":"http://localhost:8000/assets/154x160.jpg","width1":"154","width2":"154","width3":"154","backgroundColor":"#ffffff","text1":"<table width=\"180\" align=\"center\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" class=\"text\" style=\"border-collapse:collapse; border:0;\"> <tbody> <tr> <td class=\"title\" style=\"color: #414141; font-family: \'Raleway\', Open Sans, sans-serif; font-weight:600; font-size: 18px; text-align:center\" data-size=\"s3_title_size\" data-min=\"12\" data-max=\"36\" data-color=\"s3_title_color\" mc:edit=\"s3_tt1\">Creative </td></tr><tr> <td height=\"10\" width=\"1\" style=\"font-size: 1px; line-height: 10px; height:10px;\">&nbsp;<img src=\"https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png\" alt=\"spacer\" width=\"1\" height=\"1\"></td></tr><tr> <td class=\"text\" style=\"color: #696969; font-family: \'Raleway\', sans-serif; font-weight:400; font-size: 14px; line-height:21px; text-align: center;\" data-size=\"s3_text_size\" data-min=\"12\" data-max=\"36\" data-color=\"s3_text_color\" mc:edit=\"s3_t1\">Lorem ipsum dolor sit amet, consecteturis adipi&shy;scing elit sed do eius. </td></tr><tr> <td height=\"40\" width=\"1\" style=\"font-size: 1px; line-height: 40px; height:40px;\">&nbsp;<img src=\"https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png\" alt=\"spacer\" width=\"1\" height=\"1\"></td></tr></tbody> </table>","text2":"<table width=\"180\" align=\"center\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" class=\"text\" style=\"border-collapse:collapse; border:0;\"> <tbody> <tr> <td class=\"title\" style=\"color: #414141; font-family: \'Raleway\', Open Sans, sans-serif; font-weight:600; font-size: 18px; text-align:center\" data-size=\"s3_title_size\" data-min=\"12\" data-max=\"36\" data-color=\"s3_title_color\" mc:edit=\"s3_tt2\">Layared Psd </td></tr><tr> <td height=\"10\" width=\"1\" style=\"font-size: 1px; line-height: 10px; height:10px;\">&nbsp;<img src=\"https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png\" alt=\"spacer\" width=\"1\" height=\"1\"></td></tr><tr> <td class=\"text\" style=\"color: #696969; font-family: \'Raleway\', sans-serif; font-weight:400; font-size: 14px; line-height:21px; text-align: center;\" data-size=\"s3_text_size\" data-min=\"12\" data-max=\"36\" data-color=\"s3_text_color\" mc:edit=\"s3_t2\">Lorem ipsum dolor sit amet, consecteturis adipi&shy;scing elit sed do eius. </td></tr><tr> <td height=\"40\" width=\"1\" style=\"font-size: 1px; line-height: 40px; height:40px;\">&nbsp;<img src=\"https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png\" alt=\"spacer\" width=\"1\" height=\"1\"></td></tr></tbody> </table>","text3":"<table width=\"180\" align=\"center\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" class=\"text\" style=\"border-collapse:collapse; border:0;\"> <tbody> <tr> <td class=\"title\" style=\"color: #414141; font-family: \'Raleway\', Open Sans, sans-serif; font-weight:600; font-size: 18px; text-align:center\" data-size=\"s3_title_size\" data-min=\"12\" data-max=\"36\" data-color=\"s3_title_color\" mc:edit=\"s3_tt3\">Easy To Use </td></tr><tr> <td height=\"10\" width=\"1\" style=\"font-size: 1px; line-height: 10px; height:10px;\">&nbsp;<img src=\"https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png\" alt=\"spacer\" width=\"1\" height=\"1\"></td></tr><tr> <td class=\"text\" style=\"color: #696969; font-family: \'Raleway\', sans-serif; font-weight:400; font-size: 14px; line-height:21px; text-align: center;\" data-size=\"s3_text_size\" data-min=\"12\" data-max=\"36\" data-color=\"s3_text_color\" mc:edit=\"s3_t3\">Lorem ipsum dolor sit amet, consecteturis adipi&shy;scing elit sed do eius. </td></tr><tr> <td height=\"40\" width=\"1\" style=\"font-size: 1px; line-height: 40px; height:40px;\">&nbsp;<img src=\"https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png\" alt=\"spacer\" width=\"1\" height=\"1\"></td></tr></tbody> </table> "},"id":"id1486809647439RAND99637"},{"type":"text","options":{"padding":["10px","50px","10px","50px"],"backgroundColor":"#c0c0c0","text":"<p style=\"margin:0 0 10px 0;line-height:22px;font-size:13px;\" data-block-id=\"text-area\">Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>"},"id":"id1486808417068RAND23761"},{"type":"text","options":{"padding":["10px","50px","10px","50px"],"backgroundColor":"#c0c0c0","text":"<p style=\"margin:0 0 10px 0;line-height:22px;font-size:13px;\" data-block-id=\"text-area\">Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>"},"id":"id1486808805437RAND40817"},{"type":"image","options":{"align":"center","padding":["15px","50px","15px","50px"],"image":"http://localhost:8000/assets/350x150.jpg","backgroundColor":"#ffffff"},"id":"id1486808516156RAND96351"},{"type":"text","options":{"padding":["10px","50px","10px","50px"],"backgroundColor":"#ffffff","text":"<p style=\"margin:0 0 10px 0;line-height:22px;font-size:13px;\" data-block-id=\"text-area\">Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>"},"id":"id1486808333265RAND35783"},{"type":"title","options":{"align":"center","title":"New Title","subTitle":"New Title","padding":["5px","50px","5px","50px"],"backgroundColor":"#fff","color":"#444444"},"id":"id1486808039415RAND85477"},{"type":"text","options":{"padding":["10px","50px","10px","50px"],"backgroundColor":"#ffffff","text":"<p style=\"margin:0 0 10px 0;line-height:22px;font-size:13px;\" data-block-id=\"text-area\">Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>"},"id":"id1486808037214RAND95798"},{"type":"divider","options":{"padding":["15px","50px","0px","50px"],"backgroundColor":"#ffffff"},"id":"id1486808004418RAND50386"}],"html":"<html><title>New Email</title><head><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><link href=\"https://fonts.googleapis.com/css?family=Raleway:300,400,500,600,700\" rel=\"stylesheet\" type=\"text/css\"><style>@import url(https://fonts.googleapis.com/css?family=Raleway:300,400,500,600,700); html{width: 100%;}body{width: 100%; background-color: white; margin:0; padding:0;-webkit-font-smoothing: antialiased; mso-margin-top-alt:0px; mso-margin-bottom-alt:0px; mso-padding-alt: 0px 0px 0px 0px;}p,h1,h2,h3,h4{margin-top:0; margin-bottom:0; padding-top:0; padding-bottom:0;}table{font-size: 14px;border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;border: 0px;}span.preheader{display: none;font-size: 1px; visibility: hidden; opacity: 0; color: transparent; height: 0; width: 0;}@media only screen and (max-width: 600px){body{min-width:100% !important;}.container{width:450px !important; min-width:450px !important;}.container_2{width:450px !important; min-width:450px !important;}.container_3{height:180px !important;}.center{margin:0 auto 0 auto !important; padding-top: 20px;}.center_menu{margin:0 auto 0 auto !important; text-align:center !important;}.container_wrap{display:inline-block !important; width:450px !important; height:auto !important;}.container_wrap_2{display:block !important; width:450px !important; text-align:center !important; height:auto !important;}.container_wrap_margin{display:block !important; width:100% !important; height:10px !important;}.text{width:380px !important; text-align:center !important;}.title{width:450px !important;text-align:center !important;}.title_2{width:450px !important;border:none !important; text-align:center !important; padding-left:none !important;}.image_container_main a img{width:450px !important; height:auto !important}.image_container{width: 100% !important; height: auto !important;}.disable{display: none !important;}.enable{display: inline !important;}.bgnd{background-size:cover !important;}.padding_top{padding-top: 20px;}.padding_bottom{padding-bottom: 20px;}.height{height:400px !important;}}@media only screen and (max-width: 481px){body{min-width:100% !important;}.container{width:300px !important; min-width:300px !important;}.container_2{width:300px !important; min-width:300px !important;}.container_3{height:180px !important;}.center{margin:0 auto 0 auto !important;}.center_menu{margin:0 auto 0 auto !important;}.container_wrap{display:inline-block !important; width:300px !important; height:auto !important; border-radius:0 !important;}.container_wrap_2{display:block !important; width:300px !important; height:auto !important;}.container_wrap_margin{display:block !important; width:100% !important; height:10px !important;}.text{width:270px !important; text-align:center !important;}.title{text-align:center !important;width:300px !important;}.title_2{width:450px !important;border:none !important; text-align:center !important; padding-left:none !important;}.image_container_main a img{width:300px !important; height:auto !important;}.image_container{width: 100% !important; height: auto !important;}.disable{display: none !important;}.enable{display: inline !important;}.bgnd{background-size:cover !important;}.padding_top{padding-top: 20px;}.padding_bottom{padding-bottom: 20px;}.height{height:300px !important;}}</style></head><body style=\"background: rgb(204, 204, 204); padding: 50px 0px;\">\n                        <table mc:repeatable=\"layout\" mc:hideable=\"\" mc:variant=\"section_3\" width=\"100%\" align=\"center\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" data-bgcolor=\"s3_bg\" style=\"max-width:800px;display: table; background-color:  #ffffff\" data-type=\"text-block\" class=\"ng-scope\">\n    <tbody>\n    <tr>\n        <td data-block-id=\"background\" data-clonable=\"true\" align=\"left\" style=\"padding:010px 50px 10px 50px ; text-decoration: none; font-family: \'Raleway\', Open Sans, sans-serif; font-size: 14px; line-height:21px; color:#696969; text-align: center; font-weight:400;\" data-ng-bind-html=\"element.options.text | rawHtml\" class=\"ng-binding\"><p style=\"margin:0 0 10px 0;line-height:22px;font-size:13px;\" data-block-id=\"text-area\">Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p></td>\n    </tr>\n    </tbody>\n</table>\n                        <table mc:repeatable=\"layout\" mc:hideable=\"\" mc:variant=\"section_3\" width=\"100%\" align=\"center\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" data-bgcolor=\"s3_bg\" style=\"max-width:800px;display: table; background-color:  #ffffff\" data-type=\"text-block\" class=\"ng-scope\">\n    <tbody>\n    <tr>\n        <td data-block-id=\"background\" data-clonable=\"true\" align=\"left\" style=\"padding:010px 50px 10px 50px ; text-decoration: none; font-family: \'Raleway\', Open Sans, sans-serif; font-size: 14px; line-height:21px; color:#696969; text-align: center; font-weight:400;\" data-ng-bind-html=\"element.options.text | rawHtml\" class=\"ng-binding\"><p style=\"margin:0 0 10px 0;line-height:22px;font-size:13px;\" data-block-id=\"text-area\">Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p></td>\n    </tr>\n    </tbody>\n</table>\n                        <table mc:repeatable=\"layout\" mc:hideable=\"\" mc:variant=\"section_3\" width=\"100%\" align=\"center\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" data-bgcolor=\"s3_bg\" style=\"max-width:800px;display: table; background-color: #ffffff;\" data-type=\"image\" class=\"ng-scope\">\n    <tbody>\n    <tr>\n        <td align=\"center\" style=\"padding: 015px 50px 15px 50px ;\" class=\"image\">\n            <img class=\"\" border=\"0\" align=\"one_image\" style=\"display:block;max-width:100%;\" alt=\"\" src=\"http://localhost:8000/assets/350x150.jpg\" tabindex=\"0\">\n        </td>\n    </tr>\n    </tbody>\n</table>\n                        <table mc:repeatable=\"layout\" mc:hideable=\"\" mc:variant=\"section_4\" width=\"100%\" align=\"center\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" bgcolor=\"#eeeeee\" data-bgcolor=\"s4_bg\" style=\"max-width:800px;table-layout:fixed;margin:0 auto; border-collapse:collapse; border: 0px; max-width:800px;background-color:#ffffff\" data-module=\"section_4\" data-thumb=\"thumbnails/s4.png\" class=\"ng-scope\"> <tbody> <tr> <td align=\"center\" style=\"min-width:100%;margin:0 auto; background: url(img/s4_bg.jpg) center center / cover no-repeat;\" data-bg=\"s4_bg_img\"> <table width=\"600\" align=\"center\" class=\"container\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" style=\"border-collapse:collapse; border: 0px;\"> <tbody> <tr> <td height=\"40\" width=\"1\" style=\"font-size: 1px; line-height: 40px; height:40px;\">&nbsp;<img src=\"https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png\" alt=\"spacer\" width=\"1\" height=\"1\"></td></tr></tbody> </table> <table width=\"600\" align=\"center\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" class=\"container\" style=\"table-layout:fixed; margin:0 auto; border-collapse:collapse; border: 0px;\"> <tbody> <tr> <td align=\"center\" class=\"container\"> <table width=\"600\" align=\"center\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" class=\"container\" style=\"border-collapse:collapse; border: 0px;\"> <tbody> <tr> <td class=\"container\"> <table width=\"600\" align=\"center\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" class=\"container\" style=\"border-collapse:collapse; border: 0px;\"> <tbody> <tr> <td align=\"center\"> <table width=\"100%\" align=\"center\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" style=\"border-collapse:collapse; border: 0px;\"> <tbody> <tr> <td> <table width=\"100%\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" style=\"border-collapse:collapse; border: 0px;\"> <tbody> <tr> <th align=\"right\" class=\"container_wrap\" style=\"display:inline;\"> <table align=\"right\" width=\"280\" class=\"container\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;border: 0px;\"> <tbody> <tr> <td> <table width=\"280\" align=\"left\" class=\"container_wrap\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;border: 0px;\"> <tbody> <tr> <td class=\"image_container_main\"> <a href=\"#\"> <img mc:edit=\"\" src=\"http://localhost:8000/assets/340x145.jpg\" width=\"320\" height=\"156\" alt=\"img\"> </a> </td></tr></tbody> </table> </td></tr></tbody> </table> </th> <th align=\"left\" class=\"container_wrap ng-binding\" style=\"display:inline;\" data-ng-bind-html=\"element.options.text | rawHtml\"><table align=\"left\" width=\"280\" class=\"container\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;border: 0px;\"> <tbody> <tr> <td> <table width=\"280\" align=\"left\" class=\"container_wrap\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;border: 0px;\"> <tbody> <tr> <th align=\"right\" width=\"280\" class=\"container_wrap\"> <table align=\"right\" class=\"container\" width=\"280\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;border: 0px;\"> <tbody> <tr> <td height=\"20\" width=\"20\" style=\"font-size: 1px; line-height: 20px; height:15px;\">&nbsp;<img src=\"https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png\" alt=\"spacer\" width=\"1\" height=\"1\"></td></tr><tr> <td class=\"text\" align=\"left\" style=\"font-family: \'Raleway\', sans-serif; font-weight:700; font-size:24px; line-height:20px; color:#414141; text-align:left;padding:{{element.options.padding | arrToPadding}}\" data-size=\"s4_title_size\" data-min=\"12\" data-max=\"36\" data-color=\"s4_title_color\" mc:edit=\"s4_title_1\">What We Are </td></tr><tr> <td height=\"10\" width=\"1\" style=\"font-size: 1px; line-height: 10px; height:10px;\">&nbsp;<img src=\"https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png\" alt=\"spacer\" width=\"1\" height=\"1\"></td></tr><tr> <td class=\"text\" align=\"left\" style=\"font-family: \'Open Sans\', sans-serif; font-weight:400; font-size:14px; line-height:24px; color:#696969; text-align:left;\" data-size=\"s4_text_size\" data-min=\"12\" data-max=\"36\" data-color=\"s4_text_color\" mc:edit=\"s4_text_1\">Sed ut perspiciatis unde omnis iste natt­usistis error sit voluptatem accusantium doloremque laudantium, totam rem. </td></tr><tr> <td height=\"40\" width=\"1\" style=\"font-size: 1px; line-height: 40px; height:40px;\">&nbsp;<img src=\"https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png\" alt=\"spacer\" width=\"1\" height=\"1\"></td></tr></tbody> </table> </th> </tr></tbody> </table> </td></tr></tbody> </table></th> </tr></tbody> </table> </td></tr></tbody> </table> </td></tr><tr> <td height=\"40\" width=\"1\" style=\"font-size: 1px; line-height: 40px; height:40px;\">&nbsp;<img src=\"https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png\" alt=\"spacer\" width=\"1\" height=\"1\"></td></tr></tbody> </table> </td></tr></tbody> </table> </td></tr></tbody> </table> </td></tr></tbody></table>\n                        <table mc:repeatable=\"layout\" mc:hideable=\"\" mc:variant=\"section_3\" width=\"100%\" align=\"center\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" data-bgcolor=\"s3_bg\" style=\"max-width:800px;display: table; background-color:  #ffffff\" data-type=\"text-block\" class=\"ng-scope\">\n    <tbody>\n    <tr>\n        <td data-block-id=\"background\" data-clonable=\"true\" align=\"left\" style=\"padding:010px 50px 10px 50px ; text-decoration: none; font-family: \'Raleway\', Open Sans, sans-serif; font-size: 14px; line-height:21px; color:#696969; text-align: center; font-weight:400;\" data-ng-bind-html=\"element.options.text | rawHtml\" class=\"ng-binding\"><p style=\"margin:0 0 10px 0;line-height:22px;font-size:13px;\" data-block-id=\"text-area\">Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p></td>\n    </tr>\n    </tbody>\n</table>\n                        <table mc:repeatable=\"layout\" mc:hideable=\"\" mc:variant=\"section_3\" width=\"100%\" align=\"center\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" data-bgcolor=\"s3_bg\" style=\" display: table;max-width:800px; background-color: #fff\" data-type=\"title\" class=\"ng-scope\">\n    <tbody>\n    <tr>\n        <td align=\"center\" class=\"title\" style=\"padding:05px 50px 5px 50px ; color: #757575;\" data-block-id=\"background\">\n            <h1 style=\"width:auto; font-family: Arial, sans-serif; padding-top: 30px; font-weight: 500; color: #444444; line-height: 42px; font-size: 36px;\" data-block-id=\"main-title\" class=\"ng-binding\">New Title</h1>\n            <h4 style=\"font-family: Arial, sans-serif; font-weight: 500; color: #444444; line-height: 22px; font-size: 16px;\" data-block-id=\"sub-title\" class=\"ng-binding\">New Title</h4>\n        </td>\n    </tr>\n    </tbody>\n</table>\n                        <table mc:repeatable=\"layout\" mc:hideable=\"\" mc:variant=\"section_3\" width=\"100%\" align=\"center\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" data-bgcolor=\"s3_bg\" style=\"max-width:800px;display: table; background-color:  #ffffff\" data-type=\"text-block\" class=\"ng-scope\">\n    <tbody>\n    <tr>\n        <td data-block-id=\"background\" data-clonable=\"true\" align=\"left\" style=\"padding:010px 50px 10px 50px ; text-decoration: none; font-family: \'Raleway\', Open Sans, sans-serif; font-size: 14px; line-height:21px; color:#696969; text-align: center; font-weight:400;\" data-ng-bind-html=\"element.options.text | rawHtml\" class=\"ng-binding\"><p style=\"margin:0 0 10px 0;line-height:22px;font-size:13px;\" data-block-id=\"text-area\">Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p></td>\n    </tr>\n    </tbody>\n</table>\n                        <table class=\"main ng-scope\" mc:repeatable=\"layout\" mc:hideable=\"\" mc:variant=\"section_3\" width=\"100%\" align=\"center\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" data-bgcolor=\"s3_bg\" style=\"max-width:800px;border: 0; display: table; background-color: #ffffff;\" data-type=\"divider\">\n    <tbody>\n    <tr>\n        <td class=\"divider-simple\" style=\"padding: 015px 50px 0px 50px ;\">\n            <table width=\"100%\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" style=\"border-top: 1px solid #DADFE1;\">\n                <tbody>\n                <tr>\n                    <td width=\"100%\" height=\"15px\"></td>\n                </tr>\n                </tbody>\n            </table>\n        </td>\n    </tr>\n    </tbody>\n</table>\n                </body></html>","emailSettings":{"options":{"paddingTop":"50px","paddingBottom":"50px","backgroundColor":"#cccccc"},"type":"emailSettings"}}));
                //$scope.Email=JSON.parse('{"name":"New Email","elements":[{"type":"button","options":{"align":"center","padding":["15px","50px","15px","50px"],"buttonText":"New Button","url":"#","buttonBackgroundColor":"#3498DB","backgroundColor":"#ffffff"},"id":"id1486806682139RAND96091"}],"html":"","emailSettings":{"options":{"paddingTop":"50px","paddingBottom":"50px","backgroundColor":"#cccccc"},"type":"emailSettings"},"mailchimpHeaderFooter":true,"mailchimpHead":true}');
                $scope.cloneEmail = JSON.parse(JSON.stringify(email));
            });
            /**
             * Default Mailchimp options
             */
            if (variables.includeMailchimp.enable) {
                $scope.mailchimpOptions = angular.extend({}, variables.includeMailchimp);
            }
            /**
             * All default blocks options
             * @type {{title: {type: string, options: {align: string, title: *, subTitle: *, padding: string[], backgroundColor: string, color: string}}, divider: {type: string, options: {padding: string[], backgroundColor: string}}, text: {type: string, options: {padding: string[], backgroundColor: string, text: string}}, button: {type: string, options: {align: string, padding: string[], buttonText: *, url: string, buttonBackgroundColor: string, backgroundColor: string}}, image: {type: string, options: {align: string, padding: string[], image: string, backgroundColor: string}}, imageTextInside: {type: string, options: {padding: string[], image: string, width: string, backgroundColor: string, text: string}}, imageTextRight: {type: string, options: {padding: string[], image: string, width: string, backgroundColor: string, text: string}}, imageTextLeft: {type: string, options: {padding: string[], image: string, width: string, backgroundColor: string, text: string}}, imageText2x2: {type: string, options: {padding: string[], image1: string, image2: string, width1: string, width2: string, backgroundColor: string, text1: string, text2: string}}, imageText3x2: {type: string, options: {padding: string[], image1: string, image2: string, image3: string, width1: string, width2: string, width3: string, backgroundColor: string, text1: string, text2: string, text3: string}}, unsubscribe: {type: string, options: {padding: string[], backgroundColor: string, text: string}}}}
             */
            var defaultOptions = {
                'title': {
                    type: 'title',
                    options: {
                        align: 'center',
                        title: utils.translate('New Title'), // Enter your title here
                        subTitle: utils.translate('New Title'), // Subtitle
                        padding: ["5px", "20px", "5px", "20px"],
                        backgroundColor: '#fff',
                        color: '#444444'
                    }
                },
                'divider': {
                    type: 'divider',
                    options: {
                        padding: ['15px', '20px', '0px', '20px'],
                        backgroundColor: '#ffffff'
                    }
                },
                'text': {
                    type: 'text',
                    options: {
                        padding: ['10px', '20px', '10px', '20px'],
                        backgroundColor: '#ffffff',
                        text: '<p style="margin:0 0 10px 0;line-height:22px;font-size:13px;" data-block-id="text-area">Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>'
                    }
                },
                'button': {
                    type: 'button',
                    options: {
                        align: 'center',
                        padding: ['15px', '20px', '15px', '20px'],
                        buttonText: utils.translate('New Button'),
                        url: '#',
                        buttonBackgroundColor: '#3498DB',
                        backgroundColor: '#ffffff'
                    }
                },
                'image': {
                    type: 'image',
                    options: {
                        align: 'center',
                        padding: ["15px", "20px", "15px", "20px"],
                        width: '285',
                        image: 'assets/350x150.jpg',
                        backgroundColor: '#ffffff',
                        
                    }
                },
                'imageTextInside': {
                    type: 'imageTextInside',
                    options: {
                        padding: ["15px", "20px", "15px", "20px"],
                        image: 'assets/370x160.jpg',
                        width: '285',
                        backgroundColor: '#ffffff',
                        text: '<p style="line-height: 22px;font-family: \'Open Sans\', sans-serif; font-weight:400; font-size:14px; line-height:24px; color:#696969; text-align:left;">Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>'
                    }
                },
                'imageTextRight': {
                    type: 'imageTextRight',
                    options: {
                        padding: ["15px", "20px", "15px", "20px"],
                        image: 'assets/340x145.jpg',
                        width: '285',
                        backgroundColor: '#ffffff',
                        text: '<table align="right" class="container" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;border: 0px;"> <tbody> <tr> <td> <table width="280" align="left" class="container_wrap" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;border: 0px;"> <tbody> <tr> <th align="right" width="280" class="container_wrap"> <table align="right" class="container" width="280" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;border: 0px;"> <tbody> <tr> <td height="20" width="20" style="font-size: 1px; line-height: 20px; height:15px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr><tr> <td class="text" align="left" style="font-family: \'Raleway\', sans-serif; font-weight:700; font-size:24px; line-height:20px; color:#414141; text-align:left;padding:{{element.options.padding | arrToPadding}}" data-size="s4_title_size" data-min="12" data-max="36" data-color="s4_title_color" mc:edit="s4_title_1" >What We Are </td></tr><tr> <td height="10" width="1" style="font-size: 1px; line-height: 10px; height:10px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr><tr> <td class="text" align="left" style="font-family: \'Open Sans\', sans-serif; font-weight:400; font-size:14px; line-height:24px; color:#696969; text-align:left;" data-size="s4_text_size" data-min="12" data-max="36" data-color="s4_text_color" mc:edit="s4_text_1">Sed ut perspiciatis unde omnis iste natt&shy;usistis error sit voluptatem accusantium doloremque laudantium, totam rem. </td></tr><tr> <td height="40" width="1" style="font-size: 1px; line-height: 40px; height:40px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr></tbody> </table> </th> </tr></tbody> </table> </td></tr></tbody> </table>'
                    }
                },
                'imageTextLeft': {
                    type: 'imageTextLeft',
                    options: {
                        padding: ["15px", "20px", "15px", "20px"],
                        image: 'assets/340x145.jpg',
                        width: '320',
                        backgroundColor: '#ffffff',
                        text: '<table align="left" width="280" class="container" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;border: 0px;"> <tbody> <tr> <td> <table width="280" align="left" class="container_wrap" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;border: 0px;"> <tbody> <tr> <th align="right" width="280" class="container_wrap"> <table align="right" class="container" width="280" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;border: 0px;"> <tbody> <tr> <td height="20" width="20" style="font-size: 1px; line-height: 20px; height:15px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr><tr> <td class="text" align="left" style="font-family: \'Raleway\', sans-serif; font-weight:700; font-size:24px; line-height:20px; color:#414141; text-align:left;padding:{{element.options.padding | arrToPadding}}" data-size="s4_title_size" data-min="12" data-max="36" data-color="s4_title_color" mc:edit="s4_title_1" >What We Are </td></tr><tr> <td height="10" width="1" style="font-size: 1px; line-height: 10px; height:10px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr><tr> <td class="text" align="left" style="font-family: \'Open Sans\', sans-serif; font-weight:400; font-size:14px; line-height:24px; color:#696969; text-align:left;" data-size="s4_text_size" data-min="12" data-max="36" data-color="s4_text_color" mc:edit="s4_text_1">Sed ut perspiciatis unde omnis iste natt&shy;usistis error sit voluptatem accusantium doloremque laudantium, totam rem. </td></tr><tr> <td height="40" width="1" style="font-size: 1px; line-height: 40px; height:40px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr></tbody> </table> </th> </tr></tbody> </table> </td></tr></tbody> </table>'
                    }
                },
                'imageText2x2': {
                    type: 'imageText2x2',
                    options: {
                        padding: ["15px", "20px", "15px", "20px"],
                        image1: 'assets/255x154.jpg',
                        image2: 'assets/255x154.jpg',
                        width1: '255',
                        width2: '255',
                        backgroundColor: '#ffffff',
                        text1: '<table width="180" align="center" cellpadding="0" cellspacing="0" border="0" class="text" style="border-collapse:collapse; border:0;"> <tbody> <tr> <td class="title" style="color: #414141; font-family: \'Raleway\', Open Sans, sans-serif; font-weight:600; font-size: 18px; text-align:center" data-size="s3_title_size" data-min="12" data-max="36" data-color="s3_title_color" mc:edit="s3_tt1">Creative </td></tr><tr> <td height="10" width="1" style="font-size: 1px; line-height: 10px; height:10px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr><tr> <td class="text" style="color: #696969; font-family: \'Raleway\', sans-serif; font-weight:400; font-size: 14px; line-height:21px; text-align: center;" data-size="s3_text_size" data-min="12" data-max="36" data-color="s3_text_color" mc:edit="s3_t1">Lorem ipsum dolor sit amet, consecteturis adipi&shy;scing elit sed do eius. </td></tr><tr> <td height="40" width="1" style="font-size: 1px; line-height: 40px; height:40px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr></tbody> </table>',
                        text2: '<table width="180" align="center" cellpadding="0" cellspacing="0" border="0" class="text" style="border-collapse:collapse; border:0;"> <tbody> <tr> <td class="title" style="color: #414141; font-family: \'Raleway\', Open Sans, sans-serif; font-weight:600; font-size: 18px; text-align:center" data-size="s3_title_size" data-min="12" data-max="36" data-color="s3_title_color" mc:edit="s3_tt2">Layared Psd </td></tr><tr> <td height="10" width="1" style="font-size: 1px; line-height: 10px; height:10px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr><tr> <td class="text" style="color: #696969; font-family: \'Raleway\', sans-serif; font-weight:400; font-size: 14px; line-height:21px; text-align: center;" data-size="s3_text_size" data-min="12" data-max="36" data-color="s3_text_color" mc:edit="s3_t2">Lorem ipsum dolor sit amet, consecteturis adipi&shy;scing elit sed do eius. </td></tr><tr> <td height="40" width="1" style="font-size: 1px; line-height: 40px; height:40px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr></tbody> </table>'
                    }
                },
                'imageText3x2': {
                    type: 'imageText3x2',
                    options: {
                        padding: ["15px", "20px", "15px", "20px"],
                        image1: 'assets/154x160.jpg',
                        image2: 'assets/154x160.jpg',
                        image3: 'assets/154x160.jpg',
                        width1: '154',
                        width2: '154',
                        width3: '154',
                        backgroundColor: '#ffffff',
                        text1: '<table width="180" align="center" cellpadding="0" cellspacing="0" border="0" class="text" style="border-collapse:collapse; border:0;"> <tbody> <tr> <td class="title" style="color: #414141; font-family: \'Raleway\', Open Sans, sans-serif; font-weight:600; font-size: 18px; text-align:center" data-size="s3_title_size" data-min="12" data-max="36" data-color="s3_title_color" mc:edit="s3_tt1">Creative </td></tr><tr> <td height="10" width="1" style="font-size: 1px; line-height: 10px; height:10px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr><tr> <td class="text" style="color: #696969; font-family: \'Raleway\', sans-serif; font-weight:400; font-size: 14px; line-height:21px; text-align: center;" data-size="s3_text_size" data-min="12" data-max="36" data-color="s3_text_color" mc:edit="s3_t1">Lorem ipsum dolor sit amet, consecteturis adipi&shy;scing elit sed do eius. </td></tr><tr> <td height="40" width="1" style="font-size: 1px; line-height: 40px; height:40px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr></tbody> </table>',
                        text2: '<table width="180" align="center" cellpadding="0" cellspacing="0" border="0" class="text" style="border-collapse:collapse; border:0;"> <tbody> <tr> <td class="title" style="color: #414141; font-family: \'Raleway\', Open Sans, sans-serif; font-weight:600; font-size: 18px; text-align:center" data-size="s3_title_size" data-min="12" data-max="36" data-color="s3_title_color" mc:edit="s3_tt2">Layared Psd </td></tr><tr> <td height="10" width="1" style="font-size: 1px; line-height: 10px; height:10px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr><tr> <td class="text" style="color: #696969; font-family: \'Raleway\', sans-serif; font-weight:400; font-size: 14px; line-height:21px; text-align: center;" data-size="s3_text_size" data-min="12" data-max="36" data-color="s3_text_color" mc:edit="s3_t2">Lorem ipsum dolor sit amet, consecteturis adipi&shy;scing elit sed do eius. </td></tr><tr> <td height="40" width="1" style="font-size: 1px; line-height: 40px; height:40px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr></tbody> </table>',
                        text3: '<table width="180" align="center" cellpadding="0" cellspacing="0" border="0" class="text" style="border-collapse:collapse; border:0;"> <tbody> <tr> <td class="title" style="color: #414141; font-family: \'Raleway\', Open Sans, sans-serif; font-weight:600; font-size: 18px; text-align:center" data-size="s3_title_size" data-min="12" data-max="36" data-color="s3_title_color" mc:edit="s3_tt3">Easy To Use </td></tr><tr> <td height="10" width="1" style="font-size: 1px; line-height: 10px; height:10px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr><tr> <td class="text" style="color: #696969; font-family: \'Raleway\', sans-serif; font-weight:400; font-size: 14px; line-height:21px; text-align: center;" data-size="s3_text_size" data-min="12" data-max="36" data-color="s3_text_color" mc:edit="s3_t3">Lorem ipsum dolor sit amet, consecteturis adipi&shy;scing elit sed do eius. </td></tr><tr> <td height="40" width="1" style="font-size: 1px; line-height: 40px; height:40px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr></tbody> </table> '
                    }
                },
                'unsubscribe': {
                    type: 'unsubscribe',
                    options: {
                        padding: ['10px', '20px', '10px', '50px'],
                        backgroundColor: '#eeeeee',
                        text: '<p style="text-align: center; margin: 0px 0px 10px 0px; line-height: 22px; font-size: 13px;" data-block-id="text-area"><span style="font-size: 8pt; color: #333333;">' + utils.translate('_unsub_placeholder_default_text_') + '<span style="color: #0000ff;"> <a style="color: #0000ff;" href="*|UNSUB|*">' + utils.translate('_unsub_placeholder_click_text') + '</a></span>.</span></p>'
                    }
                }
            };
            /**
             * All elements to drag and drop
             * @type {*[]}
             */
            $scope.elements = [
                {
                    type: 'title',
                    icon: 'title',
                    primary_head: 'New Title',
                    second_head: 'assets/title.PNG'
                },
                {
                    type: 'divider',
                    icon: '&#xE8E9;',
                    primary_head: 'Devider',
                    second_head: 'assets/devider.PNG'
                },
                {
                    type: 'text',
                    icon: '&#xE8EE;',
                    primary_head: 'Text',
                    second_head: 'assets/text.PNG'
                },
                {
                    type: 'image',
                    icon: '&#xE40B;',
                    primary_head: 'Image',
                    second_head: 'assets/image.PNG'
                },
                {
                    type: 'button',
                    icon: 'radio_button_checked',
                    primary_head: 'Button',
                    second_head: 'assets/button.PNG'
                },
                {
                    type: 'imageTextInside',
                    icon: '&#xE850;',
                    primary_head: 'Image Inside Text',
                    second_head: 'assets/imageinsidetext.PNG'
                },
                {
                    type: 'imageTextLeft',
                    icon: 'burst_mode',
                    primary_head: 'Image placed right to text',
                    second_head: "assets/lefttext.PNG"
                },
                { //&#xE060;
                    type: 'imageTextRight',
                    icon: '&#xE060',
                    primary_head: 'Image placed left to text',
                    second_head: 'assets/righttext.PNG'
                },
                {
                    type: 'imageText2x2',
                    icon: 'pause',
                    primary_head: '2 columns with 2 Images and Text',
                    second_head: 'assets/2images.PNG'
                },
                {
                    type: 'imageText3x2',
                    icon: '&#xE8EC;',
                    primary_head: '3 columns with 3 Images and Text',
                    second_head: 'assets/3images.PNG'
                },
                {
                    type: 'unsubscribe',
                    icon: '&#xE157;',
                    primary_head: 'Link with Label',
                    second_head: 'assets/link.PNG'
                }
            ];
            /**
             * Default language
             * @type {string}
             */
            $scope.currentLanguage = 'en';
            /**
             * Tinymce options
             * @type {{inline: boolean, skin: string, theme: string, plugins: string[], toolbar: string, fontsize_formats: string}}
             */
            $scope.tinymceOptions = {
                inline: false,
                skin: 'lightgray',
                theme: 'modern',
                plugins: ["advlist autolink lists link image charmap", "searchreplace visualblocks code", "insertdatetime media table contextmenu paste", 'textcolor'],
                toolbar: "undo redo | styleselect mailchimpMergeTags | bold italic fontsizeselect forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image",
                fontsize_formats: '8pt 9pt 10pt 11pt 12pt 13pt 14pt 15pt 16pt 18pt 24pt 36pt'
            };

            /**
             * Include Mailchimo Merge tags in Tinymce if is enabled
             */
            if (variables.includeMailchimp.enable && variables.includeMailchimp.mergeTagsInTinymce) {
                $scope.tinymceOptions = angular.extend($scope.tinymceOptions, {
                    setup: function(editor) {
                        editor.addButton('mailchimpMergeTags', {
                            type: 'menubutton',
                            text: 'Merge Tags',
                            icon: false,
                            menu: ['*|FNAME|*', '*|LNAME|*', '*|EMAIL|*', '*|LIST:NAME|*', '*|LIST:COMPANY|*', '*|LIST:SUBSCRIBERS|*', '*|USER:COMPANY|*', '*|USER:ADDRESS|*', '*|USER:PHONE|*', '*|MC:DATE|*', '*|CURRENT_YEAR|*', '*|UNSUB|*', '*|UPDATE_PROFILE|*'].map(function(tag) {
                                return {
                                    text: tag,
                                    onclick: function() {
                                        editor.insertContent(tag);
                                    }
                                }
                            })
                        });
                    }
                });
            }

            /**
             * Get template by type
             *
             * @param type
             * @returns {string}
             */
            $scope.getTemplate = function(type) {
                return type ? type + 'Template' : 'textTemplate';
            };
            /**
             * Remove block element by id
             * @param id
             */
            $scope.removeElement = function(id) {
                var el = utils.findWhere($scope.Email.elements, {id: id});
                $scope.Email.elements.splice($scope.Email.elements.indexOf(el), 1);
                utils.trackEvent('Elements', 'remove', el.type);
                $scope.currentElement = undefined;
            };
            /**
             * Clone block element by id
             * @param id
             */
            $scope.cloneElement = function(id) {
                var el = utils.findWhere($scope.Email.elements, {id: id});
                var newEl = JSON.parse(JSON.stringify(el));
                newEl.id = utils.uid();
                utils.trackEvent('Elements', 'clone', newEl.type);
                $scope.Email.elements.splice($scope.Email.elements.indexOf(el) + 1, 0, newEl);
                $scope.changeHtml();
                setTimeout(function () {
                    $( ".resizable" ).resizable();
                },100);
            };
            /**
             * Edit block element by id
             * @param id
             */
            $scope.editElement = function(id) {
                if ($scope.preview) return;
                $scope.currentElement = id != 'emailSettings' ? utils.findWhere($scope.Email.elements, {id: id}) : $scope.Email[id];
                $scope.currentElement && utils.trackEvent('Email', 'edit', $scope.currentElement.type);
            };
            /**
             * Change languge
             * @param key
             * @returns {Server|Object|string}
             */
            $scope.changeLanguage = function(key) {
                $scope.currentLanguage = key;
                return $translate.use(key);
            };
            /**
             * Check if email has changed, to enable or disable save button
             * @returns {boolean}
             */
            $scope.hasChanges = function() {
                return !angular.equals($scope.Email, $scope.cloneEmail)
            };
            /**
             * Save email example
             */
            
            //$scope.Email='{"name":"New Email","elements":[{"type":"button","options":{"align":"center","padding":["15px","50px","15px","50px"],"buttonText":"New Button","url":"#","buttonBackgroundColor":"#3498DB","backgroundColor":"#ffffff"},"id":"id1486806682139RAND96091"}],"html":"","emailSettings":{"options":{"paddingTop":"50px","paddingBottom":"50px","backgroundColor":"#cccccc"},"type":"emailSettings"},"mailchimpHeaderFooter":true,"mailchimpHead":true}';
            $scope.saveEmailTemplate = function() {
                // Striping not necessary tags
                
                $scope.Email.html = utils.stripTags($('.builder .email-container').html(), $scope.Email);
                //console.log("JSON"+JSON.stringify($scope.Email));
                // $scope.Email = is what you need to save
                storage.put($scope.Email).then(function() {
                    utils.notify(utils.translate('email_saved')).success();
                    utils.trackEvent('Email', 'saved');
                    $scope.cloneEmail = JSON.parse(JSON.stringify($scope.Email));
                    $scope.$evalAsync(function() {
                        $scope.currentElement = undefined;
                    })
                });
            };

            /**
             * Open export container
             * @returns {*}
             */
            $scope.openExportContainer = function() {
                if (!$scope.Email.elements.length)
                    return utils.notify(utils.translate('nothing_to_export')).log();
                $scope.exportAsHtml = false;
                $scope.currentElement = 'export';
                $scope.changeHtml();
            };
            /**
             * Export email as JSON
             * @returns {*|{trigger, _default}}
             */
            $scope.exportEmailAsJson = function() {
                var a = document.createElement('a');
                a.target = '_blank';
                utils.trackEvent('Email', 'export', 'JSON');
                a.href = 'data:attachment/json,' + encodeURI(JSON.stringify($scope.Email));
                a.download = utils.uid('export') + '.json';
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
            };
            $scope.mobilepreview=function(){
                var w = window.open("", "", "width=360, height=640");
                w.document.write(utils.removeLineBreaks(utils.stripTags($('.builder .email-container').html(), $scope.Email)));
            }
            $scope.desktoppreview=function(){
                var w = window.open("", "", "width=850, height=660");
                w.document.write(utils.removeLineBreaks(utils.stripTags($('.builder .email-container').html(), $scope.Email)));
            }
            $scope.sendEmail=function(email){
                //console.log("Email"+email);
                //console.log(JSON.stringify($scope.Email.html));
                $.ajax({ url: "backend/templates.php", data:{"operation":"sendemail","html":JSON.stringify(utils.removeLineBreaks(utils.stripTags($('.builder .email-container').html(), $scope.Email))),"email":email,"subject":$scope.Email.name} ,
                    success: function(response)
                    {
                            utils.notify(utils.translate(response)).log();

                    },
                    error: function(jqXHR, textStatus, errorThrown)
                    {
                        console.log(jqXHR);
                    },
                    type: 'POST'
                });
            }
            $scope.saveAsTemplate = function() {
                var templateobj={
                    "title":$scope.templatetitle,
                    "description":$scope.templatedescription,
                    "createdate":xdate(),
                    "createtime":xtime(),
                    "filename":utils.uid('export'),
                    "html":JSON.stringify($scope.Email)
                };
                submitwithfile(templateobj, "backend/templates.php", "saveastemplate","templatescreenshot");
                /*
                $.ajax({ url: "backend/templates.php", data:{"operation":"saveastemplate","fd":formData,"title":$scope.templatetitle,"description":$scope.templatedescription,"createdate":xdate(),"createtime":xtime(),"filename":utils.uid('export'),"args":JSON.stringify($scope.Email)} ,
                  success: function(response)
                  {
                      console.log(response);
                      response = JSON.parse(response);
                      console.log(response);
                      if(response.errors.length>0)
                       {
                          $.each(response.errors, function(ind,e){
                            console.log(" --" +e.message);
                              $scope.insertmessage='Error:' + e.message;
                            });
                       }
                        else
                       {
                           $scope.insertmessage="Template Saved Successfully";
                           $(".addtemplatemsg").slideDown("slow");
                           console.log("Successfull");
                           setTimeout(function () {

                               $(".modal").fadeOut("slow");
                               $(".addtemplatemsg").hide();
                           },2500);
                       }
                
                  },
                  error: function(jqXHR, textStatus, errorThrown)
                  {
                        console.log(jqXHR);
                  },
                  type: 'POST' 
                }); */
            };

            /**
             * Download Email as HTML
             */
            $scope.downloadHtml = function() {
                var a = document.createElement('a');
                a.target = '_blank';
                utils.trackEvent('Email', 'export', 'HTML');
                a.href = 'data:attachment/html,' + encodeURI($scope.emailHtml);
                a.download = utils.uid('export') + '.html';
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
            };

            /**
             * Change exported HTML
             */
            $scope.changeHtml = function() {
                $scope.emailHtml = utils.removeLineBreaks(utils.stripTags($('.builder .email-container').html(), $scope.Email));
            };

            /**
             * Import email
             * @returns {*}
             */
            $scope.importEmail = function() {
                var file = $('<input />', {
                    type: 'file',
                    name: 'import-file'
                }).on('change', function() {
                    var importedFile = new FileReader();
                    importedFile.onload = function() {
                       // var importedData = JSON.parse(importedFile.result);
                        if (utils.validateEmail(importedData)) {
                            storage.put(importedData).then(function() {
                                utils.trackEvent('Email', 'import');
                                $scope.$evalAsync(function() {
                                    $scope.currentElement = undefined;
                                    angular.extend($scope.Email, importedData);
                                    angular.extend($scope.cloneEmail, importedData);
                                });
                                utils.notify(utils.translate('email_has_been_imported', {
                                    lastModified: new Date(fileToImport.lastModified).toLocaleString()
                                })).success()
                            });
                        } else {
                            utils.notify(utils.translate('imported_data_isnt_valid')).error()
                        }
                    };
                    var fileToImport = this.files[0];
                    if (fileToImport.type !== 'application/json') {
                        return utils.notify(utils.translate('invalid_format_file')).log()
                    }
                    importedFile.readAsText(fileToImport)
                });

                if (!$scope.Email.elements.length)
                    return file.click();

                return utils.confirm(utils.translate('before_import'), function() {
                    return file.click()
                }, function() {
                    return utils.notify(utils.translate('import_canceled')).log()
                }, utils.translate('accept'), utils.translate('deny'))
            };

            /**
             * Activate preview Email
             * @returns {*}
             */
            $scope.previewEmail = function() {

                if (!$scope.Email.elements.length)
                    return utils.notify(utils.translate('nothing_to_preview')).log();

                utils.trackEvent('Email', 'preview');
                $scope.preview = true;
                $scope.currentElement = undefined;


            };

            /**
             * Dragula configuration for builder elements
             */
            dragulaService.options($scope, 'element', {
                isContainer: function(el) {
                    return el.classList.contains('email-container');
                },
                copy: true,
                copySortSource: false,
                removeOnSpill: true,
                moves: function(el, source, handle, sibling) {
                    return !$(source).hasClass('email-container');
                },
                invalid: function(el, handle) {
                    return false; // don't prevent any drags from initiating by default
                }
            });
            /**
             * Dragula configuration for builder
             */
            dragulaService.options($scope, 'element-html', {
                copy: false,
                copySortSource: false,
                moves: function(el, source, handle, sibling) {
                    return $(handle).hasClass('move');
                },
                invalid: function(el, handle) {
                    return false; // don't prevent any drags from initiating by default
                }
            });
            /**
             * Drag and drop events for elements
             */
            $scope.$on('element.drop', function(event, el, target, source, sibling) {
                var elementType = $(el).data('type');
                var element = $.extend(true, {}, defaultOptions[elementType]);
                element.id = utils.uid();
                var index = $(sibling).index();
                $('.email-container li').remove();
                index == -1 ? $scope.Email.elements.push(element) : $scope.Email.elements.splice(index - 1, 0, element);
                utils.trackEvent('Elements', 'drop', element.type);
                $scope.currentElement = undefined;
                $scope.$apply();
                setTimeout(function () {
                    $( ".resizable" ).resizable();
                },100);
            });
            $scope.$on('element.cloned', function(event, clone, original, type) {
                var elementType = $(clone).data('type');
                var element = $.extend(true, {}, defaultOptions[elementType]);
                var html = $interpolate($templateCache.get(elementType + 'Template'))({element: element});
                return $(clone).css('list-style', 'none').html(html);
            });
            /**
             * Drag and drop events for elements inside the builder
             */
            
           
            $scope.$on('element-html.drop', function(event, el, target, source, sibling) {
                var id = $(el).attr('id');
                var index = $(sibling).index();
                if (index == -1) {
                    index = $scope.Email.elements.length - 1;
                } else {
                    index--;
                }
                var element = utils.findWhere($scope.Email.elements, {id: id});
                var oldIndex = $scope.Email.elements.indexOf(element);
                if (index >= $scope.Email.elements.length) {
                    var k = index - $scope.Email.elements.length;
                    while ((k--) + 1) {
                        $scope.Email.elements.push(undefined);
                    }
                }
                $scope.Email.elements.splice(index, 0, $scope.Email.elements.splice(oldIndex, 1)[0]);
                $scope.$apply();
                $scope.currentElement = undefined;
                return false;
            });
            
        }]);

    
  /*  
    $(document).ready(function(){

	
var element = $("#html-content-holder"); // global variable
var getCanvas; // global variable
 
    $("#btn-Preview-Image").on('click', function () {
         html2canvas(element, {
         onrendered: function (canvas) {
                $("#previewImage").append(canvas);
                getCanvas = canvas;
             }
         });
    });

	$("#btn-Convert-Html2Image").on('click', function () {
    var imgageData = getCanvas.toDataURL("image/png");
    // Now browser starts downloading it instead of just showing it
    var newData = imgageData.replace(/^data:image\/png/, "data:application/octet-stream");
    $("#btn-Convert-Html2Image").attr("download", "your_pic_name.png").attr("href", newData);
	});

});
*/