export default {
  props: ['navMap'],
  computed: {
    active: {
      get () {
        return this.$store.getters['breadcrumb/sidebarNavActive']
      }
    }
  },
  methods: {
    handleSelect (index) {
      if (this.navMap[index] !== undefined) {
        this.$router.push(this.navMap[index].location)
      }
    }
  }
}
