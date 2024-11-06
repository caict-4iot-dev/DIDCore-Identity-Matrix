<template>
  <div class="policy">
    <el-input
        v-model="textarea"
        :rows="2"
        placeholder="Please input"
        style="width: 240px"
        type="textarea"
    />
  </div>
</template>

<script lang="ts" name="policyIndex" setup>
import {reactive} from 'vue'

const state = reactive({
  loading: false,
  total: 0,
  listQuery: {
    current: 1,
    size: 10
  },
  tabList: [
    {
      name: '政策信息'
    },
    {
      name: '通知公告'
    },
    {
      name: '新闻资讯'
    }
  ]
})
const handleClick = () => {
  console.log('click')
}

const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Home',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Office',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Home',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Office',
  },
]

// const changePagination = (params: any) => {
//   state.listQuery.current = params.page
//   state.listQuery.size = params.limit
//   if (params.type === 'size') {
//     state.listQuery.current = 1
//   }
// }
</script>

<style lang="scss" scoped>
@import '/@/assets/scss/mixins/index.scss';

.policy {
  position: relative;

  &::before {
    content: '';
    width: 100%;
    height: 300px;
    background: linear-gradient(180deg, #f1f7ff 0%, #ffffff 100%);
    opacity: 0.8;
    @include abs(150px, auto, auto, 0);
  }

  .wrap {
    position: relative;
    z-index: 1;
  }

  .policy-list {
    padding: 20px 0 53px;

    li {
      padding: 30px 0 28px;
      border-bottom: 1px solid rgba(151, 151, 151, 0.2);

      a {
        display: flex;
        justify-content: space-between;
        width: 100%;
      }

      .item-img {
        width: 170px;
        height: 125px;
        border-radius: 8px;
        overflow: hidden;

        img {
          width: 100%;
          height: 100%;
        }
      }

      .item-info {
        width: calc(100% - 210px);
        padding-top: 6px;

        .info-title {
          font-weight: 500;
          font-size: 16px;
          color: #333333;
          line-height: 22px;
        }

        .info-desc {
          font-weight: 400;
          font-size: 14px;
          color: #6D7280;
          line-height: 20px;
          padding: 14px 0 20px;
          height: 74px;
          @include text-ellipsis(2);
        }

        .info-meta {
          span {
            font-weight: 400;
            font-size: 12px;
            color: #6D7280;
            line-height: 17px;

            &:nth-child(1) {
              margin-right: 162px;
            }
          }
        }
      }
    }
  }
}
</style>
