export default [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: 'cil-speedometer',
    badge: {
      color: 'info',
      text: 'NUEVO',
    }
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Control']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Resultados',
    to: '/resultados',
    icon: 'cil-cursor',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Tablas',
    to: '/tablas',
    icon: 'cil-calculator',
  },

  {
    _tag: 'CSidebarNavTitle',
    _children: ['Empresa A']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Proyecto A',
    to: '',
    icon: {
      name: 'cil-star',
      className: 'text-danger'
    },
    label: true
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Proyecto B',
    to: '',
    icon: {
      name: 'cil-star',
      className: 'text-info'
    },
    label: true
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Proyecto C',
    to: '',
    icon: {
      name: 'cil-star',
      className: 'text-warning'
    },
    label: true
  },
  {
    _tag: 'CSidebarNavDivider',
    className: 'm-2'
  }
]

