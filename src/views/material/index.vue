<template>
  <div class="app-container">
    <div>
      <el-form
        ref="searchForm"
        :model="searchForm"
        label-width="180px"
        size="small"
        label-position="right"
      >
        <el-row :gutter="8">
          <el-col :span="6">
            <el-form-item label="Material Number" prop="material_number">
              <el-input
                v-model="searchForm.material_number"
                size="mini"
                placeholder="Please input Material Number"
              />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item
              label="Material Description En"
              prop="material_description_en"
            >
              <el-input
                v-model="searchForm.material_description_en"
                size="mini"
                placeholder="Please input Material Number"
              />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item
              label="Material Description Zh"
              prop="material_description_zh"
            >
              <el-input
                v-model="searchForm.material_description_zh"
                size="mini"
                placeholder="Please input Material Number"
              />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="Plant Name" prop="plant_id">
              <el-select
                v-model="searchForm.plant_id"
                size="mini"
                style="width: 100%"
                placeholder="Select Plant"
              >
                <el-option
                  v-for="item in plantList"
                  :key="item.id"
                  :label="item.plant_name"
                  :value="item.id"
                />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="Tech Code Name" prop="plant_tech_code_id">
              <el-select
                v-model="searchForm.plant_tech_code_id"
                size="mini"
                style="width: 100%"
                placeholder="Select plant code"
              >
                <el-option
                  v-for="item in plantTechList"
                  :key="item.id"
                  :label="item.plant_tech_code_name"
                  :value="item.id"
                />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="Material Group Name" prop="material_group_id">
              <el-select
                v-model="searchForm.material_group_id"
                size="mini"
                style="width: 100%"
                placeholder="Select material group"
              >
                <el-option
                  v-for="item in materialGroupList"
                  :key="item.id"
                  :label="item.group_name"
                  :value="item.id"
                />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="Handover Type" prop="handover_type">
              <el-select
                v-model="searchForm.handover_type"
                size="mini"
                style="width: 100%"
                placeholder="Handover Type"
              >
                <el-option
                  v-for="item in handoverTypeList"
                  :key="item.key"
                  :label="item.value"
                  :value="item.key"
                />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label-width="50px">
              <el-button
                type="primary"
                size="mini"
                icon="el-icon-search"
                @click="searchMaterial"
                >SEARCH</el-button
              >
              <el-button
                type="primary"
                size="mini"
                @click="resetForm('searchForm')"
              >
                <template :slot-scope="icon">
                  <svg-icon icon-class="reset" />
                </template>
                RESET
              </el-button>
              <el-button
                type="primary"
                size="mini"
                icon="el-icon-refresh"
                @click="resetForm('searchForm')"
                >REFRESH</el-button
              >
              <el-button size="mini" type="primary">
                <template :slot-scope="icon">
                  <svg-icon icon-class="template" />
                </template>
                TEMPLATE
              </el-button>
              <el-button
                size="mini"
                type="primary"
                @click="handleCreateMaterial"
              >
                <template :slot-scope="icon">
                  <svg-icon icon-class="create" />
                </template>
                CREATE</el-button
              >
              <el-button size="mini" type="primary">
                <template :slot-scope="icon">
                  <svg-icon icon-class="export" />
                </template>
                EXPORT
              </el-button>
              <el-button size="mini" type="primary">
                <template :slot-scope="icon">
                  <svg-icon icon-class="upload" />
                </template>
                UPLOAD</el-button
              >
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <el-table
      v-loading="loading"
      :data="MaterialList"
      style="width: 100%"
      :header-cell-style="tableHeaderStyle"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" class="demo-table-expand">
            <el-row :gutter="12">
              <el-col :span="12">
                <el-form-item label="Manufacturer Name">
                  <span>{{ props.row.manufacturer_name }}</span>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="Manufacturer Part Number">
                  <span>{{ props.row.manufacturer_part_number }}</span>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="Manufacturer Model">
                  <span>{{ props.row.manufacturer_model }}</span>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="Unit">
                  <span>{{ props.row.unit }}</span>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="Calibration">
                  <span>{{ props.row.calibration }}</span>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="Repairable">
                  <span>{{ props.row.repairable }}</span>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="CCC or CCC Related">
                  <span>{{ props.row.ccc_or_ccc_related }}</span>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="Position Number">
                  <span>{{ props.row.position_number }}</span>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="Material Main Classification">
                  <span>{{ props.row.material_main_classification }}</span>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="Material Sub Classification">
                  <span>{{ props.row.material_sub_classification }}</span>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="Manufacture Model Old1">
                  <span>{{ props.row.manufacture_model_old1 }}</span>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="Manufacture Model Old2">
                  <span>{{ props.row.manufacture_model_old2 }}</span>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="Manufacture PN Old1">
                  <span>{{ props.row.manufacture_pn_old1 }}</span>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="Manufacture PN Old2">
                  <span>{{ props.row.manufacture_pn_old2 }}</span>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="Dimension">
                  <span>{{ props.row.dimension }}</span>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="Material Special Treatment">
                  <span>{{ props.row.material_special_treatment }}</span>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="Mpr Remark">
                  <span>{{ props.row.mpr_remark }}</span>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="Tech Remark">
                  <span>{{ props.row.tech_remark }}</span>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="Supplier Name">
                  <span>{{ props.row.supplier_name }}</span>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="Surplus Point">
                  <span>{{ props.row.surplus_point }}</span>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="Install QTY">
                  <span>{{ props.row.install_qty }}</span>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column prop="id" label="ID" width="50" />
      <el-table-column
        prop="material_number"
        label="Material Number"
        align="center"
      />
      <el-table-column prop="plant_name" label="Plant Name" align="center" />
      <el-table-column
        prop="material_group_name"
        label="Material Group Name"
        align="center"
      />
      <el-table-column
        prop="importancy_level_name"
        label="Importancy Level"
        width="180"
        align="center"
      />
      <el-table-column
        prop="handover_type"
        label="Handover Type"
        align="center"
      />
      <el-table-column
        prop="material_description_en"
        label="Material Description En"
        align="center"
      />
      <el-table-column
        prop="material_description_zh"
        label="Material Description Zh"
        align="center"
      />
      <el-table-column fixed="right" label="Handle" width="120">
        <template slot-scope="scope">
          <el-button
            type="text"
            size="small"
            @click.native.prevent="deleteRow(scope.$index, tableData)"
          >
            Delete
          </el-button>
          <el-button
            type="text"
            size="small"
            @click.native.prevent="updateMaterial(scope.$index, tableData)"
          >
            Update
          </el-button>
        </template>
      </el-table-column>
      <!-- <el-table-column prop="manufacturer_name" label="Manufacturer Name" ></el-table-column>
       <el-table-column prop="manufacturer_part_number" label="Manufacturer Part Number" ></el-table-column>
       <el-table-column prop="manufacturer_model" label="Manufacturer Model" ></el-table-column>
       <el-table-column prop="unit" label="Unit" ></el-table-column>
       <el-table-column prop="calibration" label="Calibration" ></el-table-column>
       <el-table-column prop="repairable" label="Repairable" ></el-table-column>
       <el-table-column prop="ccc_or_ccc_related" label="CCC or CCC Related" ></el-table-column>
       <el-table-column prop="position_number" label="Position Number" ></el-table-column>
       <el-table-column prop="material_main_classification" label="Material Main Classification" ></el-table-column>
       <el-table-column prop="material_sub_classification" label="Material Sub Classification" ></el-table-column>
       <el-table-column prop="manufacture_model_old1" label="Manufacture Model Old1" ></el-table-column>
       <el-table-column prop="manufacture_model_old2" label="Manufacture Model Old2" ></el-table-column>
       <el-table-column prop="manufacture_pn_old1" label="Manufacture PN Old1" ></el-table-column>
       <el-table-column prop="manufacture_pn_old2" label="Manufacture PN Old2" ></el-table-column>
       <el-table-column prop="dimension" label="Dimension" ></el-table-column>
       <el-table-column prop="material_special_treatment" label="Material Special Treatment" ></el-table-column>
       <el-table-column prop="mpr_remark" label="Mpr Remark" ></el-table-column>
       <el-table-column prop="tech_remark" label="Tech Remark" ></el-table-column>
       <el-table-column prop="supplier_name" label="Supplier Name" ></el-table-column>
       <el-table-column prop="surplus_point" label="Surplus Point" ></el-table-column>
       <el-table-column prop="install_qty" label="Install QTY" ></el-table-column> -->
      <!-- <el-table-column /> -->
    </el-table>
    <div class="block">
      <el-pagination
        :current-page.sync="currentPage3"
        :page-size="100"
        layout="prev, pager, next, jumper"
        :total="1000"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
    <el-dialog
      :visible.sync="dialogVisible"
      title="Material"
      width="70%"
      center
      :before-close="handleClose"
    >
      <el-form
        ref="materialForm"
        :model="materialForm"
        label-position="right"
        label-width="200px"
      >
        <el-row :gutter="12">
          <el-col :span="8">
            <el-form-item label="Important Level">
              <el-select
                v-model="materialForm.importancy_level_id"
                size="mini"
                style="width: 100%"
                placeholder="Select Important Level"
              >
                <el-option
                  v-for="item in importancyLevelList"
                  :key="item.id"
                  :label="item.level_name"
                  :value="item.id"
                />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="Material Group Name" prop="material_group_id">
              <el-select
                v-model="materialForm.material_group_id"
                size="mini"
                style="width: 100%"
                placeholder="Select material group"
              >
                <el-option
                  v-for="item in materialGroupList"
                  :key="item.id"
                  :label="item.group_name"
                  :value="item.id"
                />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="Description En:">
              <el-input
                v-model="materialForm.material_description_en"
                size="mini"
                placeholder="Description En"
              />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="Description Zh:">
              <el-input
                v-model="materialForm.material_description_zh"
                size="mini"
                placeholder="Description Zh"
              />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="Plant:">
              <el-select
                v-model="materialForm.plant_id"
                size="mini"
                style="width: 100%"
                placeholder="Select Plant"
              >
                <el-option
                  v-for="item in plantList"
                  :key="item.id"
                  :label="item.plant_name"
                  :value="item.id"
                />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="Plant Tech">
              <el-select
                v-model="materialForm.plant_tech_code_id"
                size="mini"
                style="width: 100%"
                multiple
                placeholder="Select Plant code"
              >
                <el-option
                  v-for="item in plantTechList"
                  :key="item.id"
                  :label="item.plant_tech_code_name"
                  :value="item.id"
                />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="Handover Type">
              <el-select
                v-model="materialForm.handover_type"
                size="mini"
                style="width: 100%"
                placeholder="Select Plant code"
              >
                <el-option
                  v-for="item in handoverTypeList"
                  :key="item.key"
                  :label="item.value"
                  :value="item.key"
                />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="Manufacturer Name">
              <el-input
                v-model="materialForm.manufacturer_name"
                size="mini"
                placeholder="Manufacturer Name"
              />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="Manufacturer Part Number">
              <el-input
                v-model="materialForm.manufacturer_part_number"
                size="mini"
                placeholder="Manufacturer Part Number"
              />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="Manufacturer Model">
              <el-input
                v-model="materialForm.manufacturer_model"
                size="mini"
                placeholder="Manufacturer Model"
              />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="Unit">
              <el-input
                v-model="materialForm.unit"
                size="mini"
                placeholder="Unit"
              />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="Calibration">
              <el-input
                v-model="materialForm.calibration"
                size="mini"
                placeholder="Calibration"
              />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="Repairable">
              <el-input
                v-model="materialForm.repairable"
                size="mini"
                placeholder="Repairable"
              />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="Material">
              <el-input
                v-model="materialForm.Material"
                size="mini"
                placeholder="Material"
              />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="CCC or CCC Related">
              <el-input
                v-model="materialForm.ccc_or_ccc_related"
                size="mini"
                placeholder="CCC or CCC Related"
              />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="Position Number">
              <el-input
                v-model="materialForm.position_number"
                size="mini"
                placeholder="Position Number"
              />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="Material Main Classification">
              <el-input
                v-model="materialForm.material_main_classification"
                size="mini"
                placeholder="Material Main Classification"
              />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="Material Sub Classification">
              <el-input
                v-model="materialForm.material_sub_classification"
                size="mini"
                placeholder="Material Sub Classification"
              />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="Manufacture Model Old1">
              <el-input
                v-model="materialForm.manufacture_model_old1"
                size="mini"
                placeholder="Manufacture Model Old1"
              />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="Manufacture Model Old2">
              <el-input
                v-model="materialForm.manufacture_model_old2"
                size="mini"
                placeholder="Manufacture Model Old2"
              />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="Manufacture PN Old1">
              <el-input
                v-model="materialForm.manufacture_pn_old1"
                size="mini"
                placeholder="Manufacture PN Old1"
              />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="Manufacture PN Old1">
              <el-input
                v-model="materialForm.manufacture_pn_old2"
                size="mini"
                placeholder="Manufacture PN Old2"
              />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="Dimension">
              <el-input
                v-model="materialForm.dimension"
                size="mini"
                placeholder="Dimension"
              />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="Material Special Treatment">
              <el-input
                v-model="materialForm.material_special_treatment"
                size="mini"
                placeholder="Material Special Treatment"
              />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="Tech Remark">
              <el-input
                v-model="materialForm.tech_remark"
                size="mini"
                placeholder="Tech Remark"
              />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="Supplier Name">
              <el-input
                v-model="materialForm.supplier_name"
                size="mini"
                placeholder="Supplier Name"
              />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="Surplus Point">
              <el-input
                v-model="materialForm.surplus_point"
                size="mini"
                clearable
                placeholder="Surplus Point"
              />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="Install QTY">
              <el-input
                v-model="materialForm.install_qty"
                size="mini"
                clearable
                placeholder="Install QTY"
              />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="Person In Charge">
              <el-select
                v-model="materialForm.resp_info"
                size="mini"
                multiple
                style="width: 100%"
                clearable
                placeholder="Choose Person In Charge"
              >
                <el-option
                  v-for="item in userList"
                  :key="item.id"
                  :label="item.user_name_en"
                  :value="item.id"
                />
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button size="mini" @click="dialogVisible = false">CANCEL</el-button>
        <el-button
          size="mini"
          type="primary"
          @click="saveMaterial('materialForm')"
          >CONFIRM</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
import {
  createMaterial,
  getMaterialList,
  getImportantLevel
} from "@/api/material";
import { getPlantList, getPlantTechList } from "@/api/plant";
import { getMaterialGroupList } from "@/api/materialGroup";
import { getUserList } from "@/api/user";
export default {
  name: "Material",
  data() {
    return {
      loading: false,
      dialogVisible: false,
      tableHeaderStyle: {
        color: "#333",
        fontFamily: "MicrosoftYaHeiUI",
        fontWeight: 900
      },
      multipleSelection: [],
      MaterialList: [],
      materialForm: {
        importancy_level_id: "",
        material_group_id: "",
        resp_info: [],
        plant_id: "",
        plant_tech_code_id: [],
        handover_type: "",
        material_description_en: "",
        material_description_zh: "",
        manufacturer_name: "",
        manufacturer_part_number: "",
        manufacturer_model: "",
        unit: "",
        calibration: "",
        repairable: "",
        material: "",
        ccc_or_ccc_related: "",
        position_number: "",
        material_main_classification: "",
        material_sub_classification: "",
        manufacture_model_old1: "",
        manufacture_model_old2: "",
        manufacture_pn_old1: "",
        manufacture_pn_old2: "",
        dimension: "",
        material_special_treatment: "",
        mpr_remark: "",
        tech_remark: "",
        supplier_name: "",
        surplus_point: "",
        install_qty: ""
      },
      currentPage3: 5,
      searchForm: {
        material_number: "",
        material_description_en: "",
        material_description_zh: "",
        handover_type: "",
        importancy_level_id: "",
        plant_tech_code_id: "",
        plant_id: "",
        material_group_id: "",
        page: 0,
        page_size: 10
      },
      plantList: [],
      plantTechList: [],
      materialGroupList: [],
      importancyLevelList: [],
      userList: [],
      handoverTypeList: [
        {
          key: "同车间通用",
          value: "同车间通用"
        },
        {
          key: "同工厂通用",
          value: "同工厂通用"
        },
        {
          key: "跨工厂通用",
          value: "跨工厂通用"
        },
        {
          key: "非通用件",
          value: "非通用件"
        }
      ]
    };
  },
  watch: {
    "searchForm.plant_id"(val) {
      this.fetchPlanTechList(Object.assign({ plant_id: val }));
    },
    "materialForm.plant_id"(val) {
      this.fetchPlanTechList(Object.assign({ plant_id: val }));
    }
  },
  created() {
    this.fetchMaterialList();
    this.fetchPlantList();
    this.fetchMaterialGroupList();
    this.fetchPlanTechList();
    this.fetchImportancyLevel();
    this.fetchUserList();
  },
  methods: {
    searchMaterial() {
      this.fetchMaterialList(Object.assign(this.searchForm));
    },
    fetchUserList() {
      getUserList().then(res => {
        this.userList = res.data;
      });
    },
    fetchImportancyLevel() {
      getImportantLevel().then(res => {
        this.importancyLevelList = res.data;
      });
    },
    fetchPlanTechList(params) {
      getPlantTechList(params).then(res => {
        this.plantTechList = res.data;
      });
    },
    fetchPlantList() {
      getPlantList().then(res => {
        this.plantList = res.data;
      });
    },
    fetchMaterialGroupList() {
      getMaterialGroupList().then(res => {
        this.materialGroupList = res.data;
      });
    },
    fetchMaterialList(params) {
      this.loading = true;
      getMaterialList(params).then(res => {
        this.MaterialList = res.data;
        this.loading = false;
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
      this.fetchMaterialList(Object.assign(this.searchForm));
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleCreateMaterial() {
      this.dialogVisible = true;
      if (this.$refs["materialForm"] !== undefined) {
        this.$refs["materialForm"].resetFields();
      }
    },
    handleClose() {
      this.dialogVisible = false;
    },
    deleteRow(index, rowData) {
      console.log("delete");
    },
    updateMaterial(index, rowData) {},
    saveMaterial(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          createMaterial(this.materialForm).then(res => {
            this.fetchMaterialList();
            this.dialogVisible = false;
            this.$message({
              message: "操作成功",
              type: "success"
            });
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  }
};
</script>
