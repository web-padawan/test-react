import { AppLayout } from "@hilla/react-components/AppLayout.js";
import { Accordion } from "@hilla/react-components/Accordion.js";
import { AccordionPanel } from "@hilla/react-components/AccordionPanel.js";
import { Avatar } from "@hilla/react-components/Avatar.js";
import { AvatarGroup } from "@hilla/react-components/AvatarGroup.js";
import { Board } from "@hilla/react-components/Board.js";
import { BoardRow } from "@hilla/react-components/BoardRow.js";
import { Button } from "@hilla/react-components/Button.js";
import { Chart } from "@hilla/react-components/Chart.js";
import { ChartSeries } from "@hilla/react-components/ChartSeries.js";
import { Checkbox } from "@hilla/react-components/Checkbox.js";
import { CheckboxGroup } from "@hilla/react-components/CheckboxGroup.js";
import { ComboBox } from "@hilla/react-components/ComboBox.js";
import { ComboBoxLight } from "@hilla/react-components/ComboBoxLight.js";
import { ConfirmDialog } from "@hilla/react-components/ConfirmDialog.js";
import { ContextMenu } from "@hilla/react-components/ContextMenu.js";
import { CookieConsent } from "@hilla/react-components/CookieConsent.js";
import { Crud } from "@hilla/react-components/Crud.js";
import { CrudEditColumn } from "@hilla/react-components/CrudEditColumn.js";
import { CustomField } from "@hilla/react-components/CustomField.js";
import { DatePicker } from "@hilla/react-components/DatePicker.js";
import { DateTimePicker } from "@hilla/react-components/DateTimePicker.js";
import { Details } from "@hilla/react-components/Details.js";
import { Dialog } from "@hilla/react-components/Dialog.js";
import { DrawerToggle } from "@hilla/react-components/DrawerToggle.js";
import { EmailField } from "@hilla/react-components/EmailField.js";
import { FormItem } from "@hilla/react-components/FormItem.js";
import { FormLayout } from "@hilla/react-components/FormLayout.js";
import { Grid } from "@hilla/react-components/Grid.js";
import { GridColumn } from "@hilla/react-components/GridColumn.js";
import { GridFilter } from "@hilla/react-components/GridFilter.js";
import { GridFilterColumn } from "@hilla/react-components/GridFilterColumn.js";
import { GridPro } from "@hilla/react-components/GridPro.js";
import { GridProEditColumn } from "@hilla/react-components/GridProEditColumn.js";
import { GridSelectionColumn } from "@hilla/react-components/GridSelectionColumn.js";
import { GridSortColumn } from "@hilla/react-components/GridSortColumn.js";
import { GridSorter } from "@hilla/react-components/GridSorter.js";
import { GridTreeColumn } from "@hilla/react-components/GridTreeColumn.js";
import { GridTreeToggle } from "@hilla/react-components/GridTreeToggle.js";
import { HorizontalLayout } from "@hilla/react-components/HorizontalLayout.js";
import { Icon } from "@hilla/react-components/Icon.js";
import { IntegerField } from "@hilla/react-components/IntegerField.js";
import { Item } from "@hilla/react-components/Item.js";
import { ListBox } from "@hilla/react-components/ListBox.js";
import { LoginForm } from "@hilla/react-components/LoginForm.js";
import { LoginOverlay } from "@hilla/react-components/LoginOverlay.js";
import { Map } from "@hilla/react-components/Map.js";
import { MenuBar } from "@hilla/react-components/MenuBar.js";
import { Message } from "@hilla/react-components/Message.js";
import { MessageInput } from "@hilla/react-components/MessageInput.js";
import { MessageList } from "@hilla/react-components/MessageList.js";
import { MultiSelectComboBox } from "@hilla/react-components/MultiSelectComboBox.js";
import { Notification } from "@hilla/react-components/Notification.js";
import { NumberField } from "@hilla/react-components/NumberField.js";
import { PasswordField } from "@hilla/react-components/PasswordField.js";
import { ProgressBar } from "@hilla/react-components/ProgressBar.js";
import { RadioButton } from "@hilla/react-components/RadioButton.js";
import { RadioGroup } from "@hilla/react-components/RadioGroup.js";
import { RichTextEditor } from "@hilla/react-components/RichTextEditor.js";
import { Scroller } from "@hilla/react-components/Scroller.js";
import { Select } from "@hilla/react-components/Select.js";
import { SideNavItem } from "@hilla/react-components/SideNavItem.js";
import { SideNav } from "@hilla/react-components/SideNav.js";
import { SplitLayout } from "@hilla/react-components/SplitLayout.js";
import { Tab } from "@hilla/react-components/Tab.js";
import { Tabs } from "@hilla/react-components/Tabs.js";
import { TabSheet } from "@hilla/react-components/TabSheet.js";
import { TextArea } from "@hilla/react-components/TextArea.js";
import { TextField } from "@hilla/react-components/TextField.js";
import { TimePicker } from "@hilla/react-components/TimePicker.js";
import { Tooltip } from "@hilla/react-components/Tooltip.js";
import { Upload } from "@hilla/react-components/Upload.js";
import { VerticalLayout } from "@hilla/react-components/VerticalLayout.js";
import { VirtualList } from "@hilla/react-components/VirtualList.js";

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

      <AvatarGroup items={[{ abbr: 'SK'}]}></AvatarGroup>

      <Board>
        <BoardRow></BoardRow>
        <BoardRow></BoardRow>
      </Board>

      <Button>
        Button
        <Tooltip slot="tooltip">Tooltip</Tooltip>
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

      <Crud>
        <CrudEditColumn></CrudEditColumn>
      </Crud>

      <CustomField></CustomField>

      <DateTimePicker label="Date and time"></DateTimePicker>

      <Details summary="Details">
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
        <FormItem >
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

      <Grid items={}>
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
