import TableContainer from "./TableContainer";
import Header from "./Header";
import ContentContainer from "./ContentContainer";
import ContentRow from "./ContentRow";
import Pagination from "./Pagination";

export const Table = Object.assign(TableContainer, {
  Header: Header,
  ContentContainer: ContentContainer,
  ContentRow: ContentRow,
  Pagination: Pagination,
});
