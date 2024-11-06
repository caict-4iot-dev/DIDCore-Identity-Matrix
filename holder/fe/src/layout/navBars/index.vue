<template>
  <div class="layout-navbars-container">
    <div class="layout-navbars-breadcrumb-index">
      <!--            <div class="layout-navbars-breadcrumb-wrap">-->
      <!--                <div class="wrap">-->
      <!--                    <Logo />-->
      <!--                    <div class="wrap-list" v-if="!state.isToken">-->
      <!--                        <a href="/login">-->
      <!--                            <svgIcon-->
      <!--                                class="icon-bg"-->
      <!--                                color="#0167FE"-->
      <!--                                :size="14"-->
      <!--                                :name="getAssetURL('icon/icon-1.svg')"-->
      <!--                            />-->
      <!--                            中小企业入口-->
      <!--                        </a>-->
      <!--                        <a href="/login">-->
      <!--                            <svgIcon-->
      <!--                                class="icon-bg"-->
      <!--                                color="#0167FE"-->
      <!--                                :size="14"-->
      <!--                                :name="getAssetURL('icon/icon-2.svg')"-->
      <!--                            />-->
      <!--                            服务商入口-->
      <!--                        </a>-->
      <!--                        <a href="http://82.157.40.213:8114/" class="manage-link" target="_blank"> -->
      <!--                            管理入口-->
      <!--                        </a> -->
      <!--                    </div>-->
      <!--                    <div v-else class="layout-navbars-breadcrumb-user">-->
      <!--                        <el-dropdown-->
      <!--                            :show-timeout="70"-->
      <!--                            :hide-timeout="50"-->
      <!--                            @command="onHandleCommandClick"-->
      <!--                        >-->
      <!--                            <span class="layout-navbars-breadcrumb-user-link">-->
      <!--                                <img-->
      <!--                                    :src="getAssetURL('user.png')"-->
      <!--                                    alt=""-->
      <!--                                    @error="getAssetURL('user.png')"-->
      <!--                                    class="layout-navbars-breadcrumb-user-link-photo mr5"-->
      <!--                                />-->
      <!--                                <span-->
      <!--                                    class="user-info"-->
      <!--                                    style="margin-left: 5px"-->
      <!--                                >-->
      <!--                                    用户-->
      <!--                                </span>-->
      <!--                                <el-icon class="el-icon&#45;&#45;right">-->
      <!--                                    <SvgIcon-->
      <!--                                        :name="-->
      <!--                                            getAssetURL('icon/icon-down.svg')-->
      <!--                                        "-->
      <!--                                        color="#fff"-->
      <!--                                        :size="10"-->
      <!--                                    />-->
      <!--                                </el-icon>-->
      <!--                            </span>-->
      <!--                            <template #dropdown>-->
      <!--                                <el-dropdown-menu>-->
      <!--                                    <el-dropdown-item command="/personal">-->
      <!--                                        <SvgIcon-->
      <!--                                            :name="-->
      <!--                                                getAssetURL(-->
      <!--                                                    'icon/icon-grzx.svg'-->
      <!--                                                )-->
      <!--                                            "-->
      <!--                                            style="margin-right: 5px"-->
      <!--                                        />-->
      <!--                                        个人中心-->
      <!--                                    </el-dropdown-item>-->
      <!--                                    <el-dropdown-item command="logOut">-->
      <!--                                        <SvgIcon-->
      <!--                                            :name="-->
      <!--                                                getAssetURL(-->
      <!--                                                    'icon/icon-login.svg'-->
      <!--                                                )-->
      <!--                                            "-->
      <!--                                            style="margin-right: 5px"-->
      <!--                                        />-->
      <!--                                        退出登录-->
      <!--                                    </el-dropdown-item>-->
      <!--                                </el-dropdown-menu>-->
      <!--                            </template>-->
      <!--                        </el-dropdown>-->
      <!--                    </div>-->
      <!--                </div>-->
      <!--            </div>-->
      <div v-if="state.path !=='/personal'" class="layout-navbars-breadcrumb-nav">
        <div class="wrap">
          <Horizontal :menuList="state.menuList"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" name="layoutBreadcrumbIndex" setup>
import {defineAsyncComponent, reactive, onMounted, watch} from 'vue'
import {storeToRefs} from 'pinia'
import {useRoutesList} from '/@/stores/routesList'
import {getAssetURL} from '/@/assets/scripts/getAssetsFile'
import other from '/@/assets/scripts/other'
import {useRouter} from 'vue-router';
// import { useUserInfo } from '/@/stores/userInfo'
import {Session} from '/@/assets/scripts/storage'
// const { userInfos } = storeToRefs(useUserInfo())
const Logo = defineAsyncComponent(() => import('/@/layout/logo/index.vue'))
const Horizontal = defineAsyncComponent(
    () => import('/@/layout/navMenu/horizontal.vue')
)

// 定义变量内容
const stores = useRoutesList()
const router = useRouter()
const {routesList} = storeToRefs(stores)
const state = reactive({
  menuList: [] as RouteItems,
  isToken: Session.get('token'),
  path: ''
})

// 设置/过滤路由（非静态路由/是否显示在菜单中）
const setFilterRoutes = () => {
  state.menuList = filterRoutesFun(routesList.value)
}
// 路由过滤递归函数
const filterRoutesFun = <T extends RouteItem>(arr: T[]): T[] => {
  return arr
      .filter((item: T) => !item.meta?.isHide)
      .map((item: T) => {
        item = Object.assign({}, item)
        if (item.children) item.children = filterRoutesFun(item.children)
        return item
      })
}
// 下拉菜单点击时
const onHandleCommandClick = (path: string) => {
  if (path === 'logOut') {
    other.loginOutHandle()
  } else {
    router.push(path);
  }
}
// 页面加载时
onMounted(() => {
  setFilterRoutes()
})
watch(
    () => router.currentRoute.value,
    (val) => {
      state.path = val.path
    },
    {
      immediate: true
    }
)
</script>


<style lang="scss" scoped>
@import '/@/assets/scss/mixins/index.scss';

.layout-navbars-breadcrumb-index {
  .layout-navbars-breadcrumb-wrap {
    position: relative;
    z-index: 1;
    //background: #fff;
    height: 48px;
    box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.1);

    .wrap {
      display: flex;
      justify-content: space-between;
      align-items: center;

      &-list {
        display: flex;
        align-items: center;

        a {
          display: block;
          margin-left: 30px;
          font-size: 12px;
          color: #000;
          font-weight: 500;

          .icon-bg {
            margin: -6px 6px 0 0;
            vertical-align: middle;
          }
        }

        .manage-link {
          padding: 0 12px;
          height: 23px;
          line-height: 23px;
          background: rgba(255, 255, 255, 0);
          border-radius: 4px;
          color: #0167FE;
          border: 1px solid #0167FE;
        }
      }
    }
  }

  .layout-navbars-breadcrumb-nav {
    background: #fff;
    height: 72px;
  }
}

.layout-navbars-breadcrumb-user {
  display: flex;
  align-items: center;
  justify-content: flex-end;

  &-link {
    height: 100%;
    display: flex;
    align-items: center;
    white-space: nowrap;

    &-photo {
      width: 25px;
      height: 25px;
      border-radius: 100%;
    }

    .user-info {
      max-width: 200px;
      @include text-no-wrap();
    }
  }

  &-icon {
    padding: 0 10px;
    cursor: pointer;
    color: var(--next-bg-topBarColor);
    height: 50px;
    line-height: 50px;
    display: flex;
    align-items: center;

    &:hover {
      background: var(--next-color-user-hover);

      i {
        display: inline-block;
        animation: logoAnimation 0.3s ease-in-out;
      }
    }

    .iconfont {
      font-size: 22px;
      color: #606266;
      cursor: pointer;
    }
  }

  :deep(.el-dropdown) {
    color: var(--next-bg-topBarColor);
  }

  :deep(.el-badge) {
    height: 40px;
    line-height: 40px;
    display: flex;
    align-items: center;
  }

  :deep(.el-badge__content.is-fixed) {
    top: 12px;
  }
}
</style>
