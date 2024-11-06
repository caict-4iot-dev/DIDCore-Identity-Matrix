<template>
	<div class="resolver">
		<el-col :span="8">
			<div class="grid-content ep-bg-purple"/>
		</el-col>
		<el-col :span="8">
			<div class="content">
				<div class="content_title">
					<div>
						<span class="content_title_avatar">
							<img alt="" src="../../assets/images/apple-touch-icon.png" srcset="">
						</span>
					</div>
					<div>
						<h2>Agent explorer</h2>
					</div>
				</div>
				<div class="content_search_title">
					<p>Start by searching for a DID</p>
				</div>
				<div class="content_search">
					<el-input
						v-model="state.bid"
						placeholder="Please input bid"
						style="width: 600px"
					>
						<template #append ><p>Search</p></template>
					</el-input>
				</div>
			</div>
		</el-col>
		<el-col :span="8">
			<div class="grid-content ep-bg-purple"/>
		</el-col>

	</div>
</template>

<script lang="ts" name="policyIndex" setup>
import {onMounted, reactive, watchEffect} from 'vue'
import {
	createVerIdentialApi,
	findAgentCredentialBybidApi, getCertificateRecordApi,
	getCertificateTemplateApi,
	verVerIdentialApi
} from "/@/api/login/login-form";
import {ElMessage} from "element-plus";
import {Buffer} from 'buffer';
import axios from "axios";


const state = reactive({
	bid:'did:bid:efnLDXexDs1TsSZdtRmrrKHW3kFvoyFN',
})

</script>

<style lang="scss" scoped>
@import '/@/assets/scss/mixins/index.scss';

.resolver {
	display: flex;

	.content {
		.content_title {
			max-width: 50%;
			display: flex;
			align-items: center;
			margin-bottom: 20px;
			h2{
				margin-left: 10px;
				font-weight: 600;
			}
			.content_title_avatar {
				img {
					width: 40px;
					height: 40px;
					line-height: 38px;
					border-radius: 50%;
				}
			}
		}
		.content_search_title{
			margin-bottom: 10px;
		}
		.content_search{
			:deep(.el-input-group__append){
				background-color: #017AFF;
				color: #fff;
			}
		}
	}

}
</style>
