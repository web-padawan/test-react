import { AppLayout } from "@vaadin/react-components/AppLayout.js";
import { Accordion } from "@vaadin/react-components/Accordion.js";
import { AccordionPanel } from "@vaadin/react-components/AccordionPanel.js";
import { Avatar } from "@vaadin/react-components/Avatar.js";
import { AvatarGroup } from "@vaadin/react-components/AvatarGroup.js";
import { Board } from "@vaadin/react-components/Board.js";
import { BoardRow } from "@vaadin/react-components/BoardRow.js";
import { Button } from "@vaadin/react-components/Button.js";
import { Chart } from "@vaadin/react-components/Chart.js";
import { ChartSeries } from "@vaadin/react-components/ChartSeries.js";
import { Checkbox } from "@vaadin/react-components/Checkbox.js";
import { CheckboxGroup } from "@vaadin/react-components/CheckboxGroup.js";
import { ComboBox } from "@vaadin/react-components/ComboBox.js";
import { ComboBoxLight } from "@vaadin/react-components/ComboBoxLight.js";
import { ConfirmDialog } from "@vaadin/react-components/ConfirmDialog.js";
import { ContextMenu } from "@vaadin/react-components/ContextMenu.js";
import { CookieConsent } from "@vaadin/react-components/CookieConsent.js";
import { Crud } from "@vaadin/react-components/Crud.js";
import { CrudEditColumn } from "@vaadin/react-components/CrudEditColumn.js";
import { CustomField } from "@vaadin/react-components/CustomField.js";
import { DatePicker } from "@vaadin/react-components/DatePicker.js";
import { DateTimePicker } from "@vaadin/react-components/DateTimePicker.js";
import { Details } from "@vaadin/react-components/Details.js";
import { DetailsSummary } from "@vaadin/react-components/DetailsSummary.js";
import { Dialog } from "@vaadin/react-components/Dialog.js";
import { DrawerToggle } from "@vaadin/react-components/DrawerToggle.js";
import { EmailField } from "@vaadin/react-components/EmailField.js";
import { FormItem } from "@vaadin/react-components/FormItem.js";
import { FormLayout } from "@vaadin/react-components/FormLayout.js";
import { Grid } from "@vaadin/react-components/Grid.js";
import { GridColumn } from "@vaadin/react-components/GridColumn.js";
import { GridFilter } from "@vaadin/react-components/GridFilter.js";
import { GridFilterColumn } from "@vaadin/react-components/GridFilterColumn.js";
import { GridPro } from "@vaadin/react-components/GridPro.js";
import { GridProEditColumn } from "@vaadin/react-components/GridProEditColumn.js";
import { GridSelectionColumn } from "@vaadin/react-components/GridSelectionColumn.js";
import { GridSortColumn } from "@vaadin/react-components/GridSortColumn.js";
import { GridSorter } from "@vaadin/react-components/GridSorter.js";
import { GridTreeColumn } from "@vaadin/react-components/GridTreeColumn.js";
import { GridTreeToggle } from "@vaadin/react-components/GridTreeToggle.js";
import { HorizontalLayout } from "@vaadin/react-components/HorizontalLayout.js";
import { Icon } from "@vaadin/react-components/Icon.js";
import { IntegerField } from "@vaadin/react-components/IntegerField.js";
import { Item } from "@vaadin/react-components/Item.js";
import { ListBox } from "@vaadin/react-components/ListBox.js";
import { LoginForm } from "@vaadin/react-components/LoginForm.js";
import { LoginOverlay } from "@vaadin/react-components/LoginOverlay.js";
import { Map } from "@vaadin/react-components/Map.js";
import { MenuBar } from "@vaadin/react-components/MenuBar.js";
import { Message } from "@vaadin/react-components/Message.js";
import { MessageInput } from "@vaadin/react-components/MessageInput.js";
import { MessageList } from "@vaadin/react-components/MessageList.js";
import { MultiSelectComboBox } from "@vaadin/react-components/MultiSelectComboBox.js";
import { Notification } from "@vaadin/react-components/Notification.js";
import { NumberField } from "@vaadin/react-components/NumberField.js";
import { PasswordField } from "@vaadin/react-components/PasswordField.js";
import { ProgressBar } from "@vaadin/react-components/ProgressBar.js";
import { RadioButton } from "@vaadin/react-components/RadioButton.js";
import { RadioGroup } from "@vaadin/react-components/RadioGroup.js";
import { RichTextEditor } from "@vaadin/react-components/RichTextEditor.js";
import { Scroller } from "@vaadin/react-components/Scroller.js";
import { Select } from "@vaadin/react-components/Select.js";
import { SideNavItem } from "@vaadin/react-components/SideNavItem.js";
import { SideNav } from "@vaadin/react-components/SideNav.js";
import { SplitLayout } from "@vaadin/react-components/SplitLayout.js";
import { Tab } from "@vaadin/react-components/Tab.js";
import { Tabs } from "@vaadin/react-components/Tabs.js";
import { TabSheet } from "@vaadin/react-components/TabSheet.js";
import { TextArea } from "@vaadin/react-components/TextArea.js";
import { TextField } from "@vaadin/react-components/TextField.js";
import { TimePicker } from "@vaadin/react-components/TimePicker.js";
import { Tooltip } from "@vaadin/react-components/Tooltip.js";
import { Upload } from "@vaadin/react-components/Upload.js";
import { VerticalLayout } from "@vaadin/react-components/VerticalLayout.js";
import { VirtualList } from "@vaadin/react-components/VirtualList.js";
import { users } from "./data.js";

function ComponentsView() {
  return (
    <>
      <AppLayout>
        <DrawerToggle slot="navbar"></DrawerToggle>
      </AppLayout>

      <Accordion>
        <AccordionPanel summary="Panel 1">
          <div>Panel 1 content</div>
        </AccordionPanel>
        <AccordionPanel summary="Panel 2">
          <div>Panel 2 content</div>
        </AccordionPanel>
      </Accordion>

      <Avatar></Avatar>

      <AvatarGroup items={[{ abbr: "SK" }]}></AvatarGroup>

      <Board>
        <BoardRow></BoardRow>
        <BoardRow></BoardRow>
      </Board>

      <Button>
        Button
        <Tooltip slot="tooltip" text="Tooltip"></Tooltip>
      </Button>

      <Chart>
        <ChartSeries></ChartSeries>
      </Chart>

      <Checkbox label="I accept"></Checkbox>

      <CheckboxGroup>
        <Checkbox value="en" label="English"></Checkbox>
        <Checkbox value="fr" label="French"></Checkbox>
        <Checkbox value="de" label="German"></Checkbox>
      </CheckboxGroup>

      <ComboBoxLight></ComboBoxLight>

      <ComboBox label="Combo Box" items={[]}></ComboBox>

      <ContextMenu items={[]}></ContextMenu>

      <ConfirmDialog></ConfirmDialog>

      <CookieConsent></CookieConsent>

      <Crud items={users} exclude="name,married">
        <CrudEditColumn></CrudEditColumn>
      </Crud>

      <CustomField></CustomField>

      <DateTimePicker label="Date and time"></DateTimePicker>

      <Details>
        <DetailsSummary slot="summary">Details</DetailsSummary>
        <div>Content</div>
      </Details>

      <Dialog noCloseOnEsc={true} headerTitle="Dialog"></Dialog>

      <FormLayout>
        <FormItem>
          <label slot="label">Username</label>
          <TextField></TextField>
        </FormItem>
        <FormItem>
          <label slot="label">Password</label>
          <PasswordField></PasswordField>
        </FormItem>
        <FormItem>
          <label slot="label">Email</label>
          <EmailField></EmailField>
        </FormItem>
        <FormItem>
          <label slot="label">Birth date</label>
          <DatePicker></DatePicker>
        </FormItem>
        <FormItem>
          <label slot="label">Age</label>
          <IntegerField></IntegerField>
        </FormItem>
        <FormItem>
          <label slot="label">Salary</label>
          <NumberField></NumberField>
        </FormItem>
      </FormLayout>

      <Grid items={[{ name: "User" }]}>
        <GridTreeColumn></GridTreeColumn>
        <GridColumn header="Column"></GridColumn>
        <GridSelectionColumn></GridSelectionColumn>
        <GridSortColumn></GridSortColumn>
        <GridFilterColumn header="Filter"></GridFilterColumn>
      </Grid>

      <GridFilter></GridFilter>

      <GridSorter></GridSorter>

      <GridTreeToggle></GridTreeToggle>

      <GridPro>
        <GridProEditColumn></GridProEditColumn>
      </GridPro>

      <HorizontalLayout></HorizontalLayout>

      <Icon></Icon>

      <ListBox>
        <Item>Item one</Item>
        <Item>Item two</Item>
      </ListBox>

      <LoginOverlay></LoginOverlay>

      <LoginForm></LoginForm>

      <Map></Map>

      <MenuBar></MenuBar>

      <Message></Message>

      <MessageInput value="Test" disabled></MessageInput>

      <MessageList></MessageList>

      <MultiSelectComboBox></MultiSelectComboBox>

      <Notification></Notification>

      <ProgressBar value={0.5}></ProgressBar>

      <RadioGroup label="Travel class">
        <RadioButton value="economy" label="Economy" />
        <RadioButton value="business" label="Business" />
        <RadioButton value="firstClass" label="First Class" />
      </RadioGroup>

      <RichTextEditor></RichTextEditor>

      <Scroller></Scroller>

      <Select label={"Select"}></Select>

      <SideNav collapsible>
        <span slot="label">Main menu</span>
        <SideNavItem>Item one</SideNavItem>
        <SideNavItem>Item two</SideNavItem>
        <SideNavItem expanded>
          Parent item
          <SideNavItem slot="children">Nested one</SideNavItem>
          <SideNavItem slot="children">Nested two</SideNavItem>
        </SideNavItem>
      </SideNav>

      <SplitLayout></SplitLayout>

      <Tabs>
        <Tab>Foo</Tab>
        <Tab>Bar</Tab>
        <Tab>Baz</Tab>
      </Tabs>

      <TabSheet></TabSheet>

      <TextArea></TextArea>

      <TimePicker label="Time" required></TimePicker>

      <Upload></Upload>

      <VerticalLayout></VerticalLayout>

      <VirtualList></VirtualList>
    </>
  );
}

export default ComponentsView;
