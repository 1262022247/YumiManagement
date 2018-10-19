import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import housingestateManagement from '../page/dataCentre/housingestateManagement'
import newHousing from '../page/dataCentre/newHousing'
import buildingManagement from '../page/dataCentre/buildingManagement'
import unitTemplate from '../page/dataCentre/unitTemplate'
import newUnitTemplate from '../page/dataCentre/newUnitTemplate'
import entranceguardManagement from '../page/dataCentre/entranceguardManagement'
import unlockingMode from '../page/dataCentre/unlockingMode'
import ownerManagement from '../page/dataCentre/ownerManagement'
import owner from '../page/dataCentre/owner'
import houseDetails from '../page/dataCentre/houseDetails'
import housedetailsEdit from '../page/dataCentre/housedetailsEdit'
import keyApplication from '../page/propertyService/keyApplication'
import newKeyapplication from '../page/propertyService/newKeyapplication'
import cardManagement from '../page/propertyService/cardManagement'
import buyCard from '../page/propertyService/buyCard'
import resetCard from '../page/propertyService/resetCard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/housingestateManagement',
      name: 'housingestateManagement',
      component: housingestateManagement
    },
    {
      path: '/newHousing/:type/:id', // type: 0查看，1编辑，2新增
      name: 'newHousing',
      component: newHousing
    },
    {
      path: '/buildingManagement',
      name: 'buildingManagement',
      component: buildingManagement
    },
    {
      path: '/unitTemplate',
      name: 'unitTemplate',
      component: unitTemplate
    },
    {
      path: '/newUnitTemplate',
      name: 'newUnitTemplate',
      component: newUnitTemplate
    },
    {
      path: '/entranceguardManagement',
      name: 'entranceguardManagement',
      component: entranceguardManagement
    },
    {
      path: '/unlockingMode',
      name: 'unlockingMode',
      component: unlockingMode
    },
    {
      path: '/ownerManagement',
      name: 'ownerManagement',
      component: ownerManagement
    },
    {
      path: '/owner',
      name: 'owner',
      component: owner
    },
    {
      path: '/houseDetails',
      name: 'houseDetails',
      component: houseDetails
    },
    {
      path: '/housedetailsEdit',
      name: 'housedetailsEdit',
      component: housedetailsEdit
    },
    {
      path: '/keyApplication',
      name: 'keyApplication',
      component: keyApplication
    },
    {
      path: '/newKeyapplication',
      name: 'newKeyapplication',
      component: newKeyapplication
    },
    {
      path: '/cardManagement',
      name: 'cardManagement',
      component: cardManagement
    },
    {
      path: '/buyCard',
      name: 'buyCard',
      component: buyCard
    },
    {
      path: '/resetCard',
      name: 'resetCard',
      component: resetCard
    }
  ]
})
