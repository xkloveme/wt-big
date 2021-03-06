import WidgetTask from '@dorring/sdk/core/Widget/task'
import WidgetLayer from '@dorring/sdk/core/Widget/layer'
import SceneTask from '@dorring/sdk/core/Scene/task'

export default class ScreenTask {
	version = '1.1.0' // 大屏版本号
	id: string // 大屏ID
	name = '未命名' // 大屏名
	scenes: { [key: string]: SceneTask } = {} // 场景
	widgets: { [key: string]: WidgetTask } = {} // 大屏组件配置
	widgetsLayers: Array<WidgetLayer> = [] // 大屏组件嵌套规则，显示规则
	type = 'CUSTOM' // 大屏类型 CUSTOM:大屏 TEMPLATE:模版
	avatar = '' // 大屏缩略图
	layoutMode = 'FULL_SIZE' // 大屏适配方式 FULL_SIZE 充满页面 FULL_WIDTH 100%宽度 FULL_HEIGHT 100%高度
	remark = '' // 备注
	createTime: string // 创建时间
	updateTime: string // 更新时间
	width = 13440 // 大屏宽度
	height = 3240 // 大屏高度
	show = true// 显示侧边
	url = 'https://inftab.com/' // 大屏URL
	showRed = false // 开启缝线
	color = 'rgba(254, 1, 1, 1)' // 缝线颜色
	zong = 7 // 纵线
	heng = 3 // 横线
	backgroundColor = ['rgba(255,255,255,1)'] // 大屏背景颜色
	gradientDirection = 90
	backgroundImage = '' // 大屏背景图片
	mainScene = '0' // 大屏首屏场景
	platform: string // 大屏平台类型 PC:PC
	domain: string // 大屏组件接口Domain
	headers: string // 大屏组件接口Headers
	filter = {
		enable: false, // 滤镜开启状态
		grayscale: 0, // 灰度
		opacity: 100, // 不透明度
		contrast: 0, // 对比度
		brightness: 0, // 明度
		saturate: 0, // 饱和度
		hueRotate: 0, // 色相
	}
	marketComponents = [] // 大屏内组件市场的组件
	constructor({
		id,
		scenes,
		widgets,
		widgetsLayers = [],
		layoutMode = 'FULL_SIZE',
		backgroundColor = ['rgba(255,255,255,1)'],
		width = 1920,
		height = 1080,
	}) {
		this.id = id
		if (scenes) {
			this.scenes = scenes
		} else {
			this.scenes = { '0': new SceneTask('0'), '-1': new SceneTask('-1') }
		}
		this.widgets = widgets
		this.widgetsLayers = widgetsLayers
		this.layoutMode = layoutMode
		this.backgroundColor = backgroundColor
		this.width = width
		this.height = height
	}
}
