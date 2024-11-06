CREATE TABLE `agent_certificate_record` (
  `id` int(20) NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `recordId` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '凭证记录Id',
  `certificate_vc` text COLLATE utf8_unicode_ci COMMENT '凭证VC',
  `created_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `created_Bid` varchar(200) COLLATE utf8_unicode_ci NOT NULL DEFAULT '' COMMENT '持证者Bid',
  `credential_bid` varchar(200) COLLATE utf8_unicode_ci DEFAULT '' COMMENT '凭证id',
  `iss_status` int(10) DEFAULT NULL COMMENT '申请凭证状态',
  `ver_status` int(10) DEFAULT NULL COMMENT '核验凭证状态',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci ROW_FORMAT=DYNAMIC COMMENT='agent凭证记录表';

CREATE TABLE `bid_document_record` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `bid` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'bid',
  `document` longtext COLLATE utf8mb4_unicode_ci,
  `created_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `certificate_record` (
  `credential_bid` varchar(200) COLLATE utf8_unicode_ci DEFAULT '' COMMENT '凭证id',
  `id` int(20) NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `bid` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '发证方bid',
  `certificate_vc` text COLLATE utf8_unicode_ci COMMENT '凭证VC',
  `public_key` varchar(200) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '发证方公钥',
  `status` int(11) NOT NULL DEFAULT '0' COMMENT '凭证状态：0-审核中 1-审核通过 2-审核拒绝 ',
  `cause` varchar(32) COLLATE utf8_unicode_ci DEFAULT '' COMMENT '原因',
  `created_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updated_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '修改时间',
  `created_Bid` varchar(200) COLLATE utf8_unicode_ci NOT NULL DEFAULT '' COMMENT '持证者Bid',
  `verId` int(11) DEFAULT NULL COMMENT '验证方Id',
  `verStatus` int(11) DEFAULT NULL COMMENT '验证凭证状态 0 为验证 1 已验证',
  `agentid` int(11) DEFAULT NULL COMMENT 'agentid',
  PRIMARY KEY (`id`),
  KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=66 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci ROW_FORMAT=DYNAMIC COMMENT='凭证记录表';

CREATE TABLE `certificatetemplate` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `templateName` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `templateType` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `templateSubject` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci ROW_FORMAT=DYNAMIC COMMENT='凭证模板表';

CREATE TABLE `issuer_credential` (
  `id` int(20) NOT NULL COMMENT 'Id',
  `holderBid` varchar(200) DEFAULT NULL,
  `vc` text,
  `created_time` datetime NOT NULL,
  `type` varchar(255) DEFAULT NULL,
  `status` int(255) DEFAULT NULL COMMENT '0 等待 1 通过 2 失败',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `verifier_credential` (
  `id` int(20) NOT NULL AUTO_INCREMENT COMMENT 'Id',
  `holderBid` varchar(200) DEFAULT NULL,
  `vc` text,
  `created_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `status` int(10) DEFAULT NULL COMMENT '0 未核验 1 已核验',
  `agentid` int(20) DEFAULT NULL COMMENT 'agentid',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4;