window.onload = () => {
    var app = new Vue({
        el: '#app',
        data() {
            return {
                perPage: 5,
                currentPage: 1,

                //dummy data
                websites: [
                    {
                        id: 1,
                        title: 'Nike',
                        subtitle: '(https://www.nike.com/)',
                        point: 6
                    },
                    {
                        id: 2,
                        title: 'Adidas',
                        subtitle: '(https:/www.adidas.com/)',
                        point: 4
                    },
                    {
                        id: 3,
                        title: 'Quicksilver',
                        subtitle: '(https://www.quicksilver.com/)',
                        point: 4
                    },

                ],
                url: '', //new brand url
                name: '', //new brand name
                isHidden: false, //show list view or add new brand view


            }
        },
        methods: {
            // Add brand method with toast messages 
            addLink: function (variant = null) {
                var _name = this.name.trim()
                var _url = this.url.trim()
                if (_name && _url) {
                    this.websites.unshift({
                        id: this.websites.length + 1,
                        title: _name,
                        subtitle: _url,
                        point: 0
                    })
                    this.name = '';
                    this.url = '';
                }

                this.$bvToast.toast('Brand Successfully Added', {
                    title: `ADDED`,
                    variant: variant,
                    solid: true,
                })

            },

            //Sort descending
            sortA: function () {
                this.websites = this.websites.slice().sort(function (a, b) {
                    return b.point - a.point;
                });
            },

            //Sort ascending
            sortB: function () {
                this.websites = this.websites.slice().sort(function (a, b) {
                    return a.point - b.point;
                });
            },

            //remove brand method with modal control & toast messages 
            removeData: function (index, variant = null) {
                this.boxTwo = ''
                this.$bvModal.msgBoxConfirm('Please confirm that you want to delete brand', {
                    title: 'Please Confirm',
                    size: 'md',
                    buttonSize: 'md',
                    okVariant: 'danger',
                    okTitle: 'Remove',
                    cancelTitle: 'Cancel',
                    footerClass: 'p-2',
                    hideHeaderClose: false,
                    centered: true
                })
                    .then(value => {
                        if (value) {
                            this.websites.splice(index, 1)
                            this.$bvToast.toast('Brand Successfully Removed', {
                                title: `REMOVED`,
                                variant: variant,
                                solid: true,
                            })
                        }
                    })
            },
        },
        //pagination 
        computed: {
            rows() {
                return this.items.length
            },

        }
    })
}
